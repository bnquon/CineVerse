import { db } from '@vercel/postgres';

const { Pool } = require('pg');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());

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

app.post("/createUser", async (req, res) => {
  const client = await db.connect();

  try {
    const { username } = req.body; // Extract the username from the request body

    // Use parameterized query to avoid SQL injection
    await client.query('INSERT INTO users (username) VALUES ($1)', [username]);

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});



//   try {
//     // const { username } = req.body;
//     // const result = await db.conn(
//     //   'INSERT INTO users (username) VALUES ($1)',
//     //   [username]
//     // );
//     res.status(201).json({ message: 'User created successfully. '});
//   } catch (error) {
//     console.error('Error creating user:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



createTables();