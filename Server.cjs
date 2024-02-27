const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: "postgres://default:O7RCgpb6slGX@ep-sparkling-frost-a6q5ioje-pooler.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require",
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