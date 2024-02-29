const { Pool } = require('pg');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

async function createTables() {
  const client = await pool.connect();

  try {
    const createTablesQuery = `
      CREATE TABLE IF NOT EXISTS users (
        userID SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        bio TEXT 
      );

      CREATE TABLE IF NOT EXISTS movies (
        movieID SERIAL PRIMARY KEY,
        movieName VARCHAR(255) NOT NULL,
        averageRating FLOAT
      );
      
      CREATE TABLE IF NOT EXISTS reviews (
        reviewID SERIAL PRIMARY KEY,
        user_ID INT REFERENCES users(userID) NOT NULL,
        movie INT REFERENCES movies(movieID) NOT NULL,
        rating INT NOT NULL,
        review TEXT
      );

      CREATE TABLE IF NOT EXISTS favorites (
        favoriteID SERIAL PRIMARY KEY,
        user_ID INT REFERENCES users(userID) NOT NULL,
        favoriteMovieName VARCHAR(255) NOT NULL
      );
    `;
    // Execute the query
    await client.query(createTablesQuery);

    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error.message);
  } finally {
    // Release the client back to the pool
    client.release();  
  }
}
createTables();

// async function testing() {
//   const client = await pool.connect();

//   try {
//     const query = `
//       INSERT INTO users (username) 
//       VALUES ('bquon')
//     `;
//     await client.query(query);

//     console.log('User inserted successfully!');
//   } catch (error) {
//     console.error('Error inserting user:', error.message);
//   } finally {
//     // Release the client back to the pool
//     client.release();  
//   }
// }

// // Call the testing function to insert the user
// testing();

const app = express();
app.use(bodyParser.json());

// Define an API endpoint for user creation
app.post('/api/createUser', async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const client = await pool.connect();
    const query = `INSERT INTO users (username) VALUES ($1)`;
    await client.query(query, [username]);
    client.release();

    return res.status(200).json({ message: 'User inserted successfully' });
  } catch (error) {
    console.error('Error inserting user:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});