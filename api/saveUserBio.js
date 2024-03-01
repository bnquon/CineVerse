import { db } from '@vercel/postgres';

export default async function handler(request, response) {
    const userID = request.query.userID
    const client = await db.connect();
    try {
        // Assuming you expect JSON data in the request body
        const { bio } = request.body;

        // Use the sql template tag to safely insert data into the database
        await client.sql`INSERT INTO userInfo (userID, bio)
                        VALUES (${userID}, ${bio})
                        ON CONFLICT (userID)
                        DO UPDATE SET (bio) = ${bio};`;

        return response.status(200).json();
    } catch (error) {
        console.error('Error saving user bio:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}