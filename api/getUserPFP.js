import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();

    try {
        const existingPFP = await client.sql`SELECT Profilepicture FROM users WHERE userID = ${userID};`;
        return res.status(200).json({ profilePicture: existingPFP })
    } catch (error) {
        console.error('Error getting user profile picture:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}