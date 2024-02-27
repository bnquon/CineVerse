const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: "postgres://default:O7RCgpb6slGX@ep-sparkling-frost-a6q5ioje-pooler.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require",
});

// Attempt to connect to the database
pool.connect()
  .then(() => {
    console.log('Connected to the database successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });
