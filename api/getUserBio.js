import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();

    try {
        const existingBio = await client.sql`SELECT * FROM userInfo WHERE userID = ${userID};`;
        const sendBio = (existingBio.rows[0]).bio;
        const temp = await client.sql`SELECT movieposterURL FROM watchlist WHERE userID = ${userID};`;
        const watchlist = temp.rows;
        return response.status(200).json({ bio: sendBio, savedWatchlist: watchlist });

    } catch (error) {
        console.error('Error creating user:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }

}