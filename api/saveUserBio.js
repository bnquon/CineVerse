import { db } from '@vercel/postgres';

export default async function handler(request, response) {
    const userID = request.query.userID
    console.log('UserID received in server code: ', userID);
    const client = await db.connect();
    try {
        // Assuming you expect JSON data in the request body
        const { bio } = request.body;
        console.log('Bio received from server code, ', bio);

        // Use the sql template tag to safely insert data into the database
        await client.sql`INSERT INTO userInfo (userID, bio)
                        VALUES (${userID}, ${bio});`;

        return response.status(200).json();
    } catch (error) {
        console.error('Error saving user bio:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}