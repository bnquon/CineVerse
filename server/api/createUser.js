import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        // Assuming you expect JSON data in the request body
        const { username } = request.body;

        if (!username) {
            throw new Error('Username is required');
        }

        // Use the sql template tag to safely insert data into the database
        await sql`INSERT INTO users (username) VALUES (${username});`;

        // Assuming you want to return the newly created user or some confirmation
        const newUser = await sql`SELECT * FROM users WHERE username = ${username};`;

        return response.status(200).json({ user: newUser.rows[0] });
    } catch (error) {
        console.error('Error creating user:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}