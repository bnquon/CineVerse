import { db } from '@vercel/postgres';

export default async function handler(request, response) {
    const client = await db.connect();
    try {
        // Assuming you expect JSON data in the request body
        const { username } = request.body;

        if (!username) {
            throw new Error('Username is required');
        }

        // Check if the username already exists
        const existingUser = await client.sql`SELECT 1 FROM users WHERE username = ${username};`;

        if (existingUser.rows.length > 0) {
            // Username already exists, return a 200 status with a message
            const existingUserData = existingUser.rows[0];
            return response.status(200).json({ user: existingUserData });
        }

        // Username doesn't exist, proceed with inserting the new user
        await client.sql`INSERT INTO users (username) VALUES (${username});`;

        // Assuming you want to return the newly created user or some confirmation
        const newUser = await client.sql`SELECT * FROM users WHERE username = ${username};`;

        return response.status(200).json({ user: newUser.rows[0] });
    } catch (error) {
        console.error('Error creating user:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}
