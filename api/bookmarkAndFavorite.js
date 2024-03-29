import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const operation = request.query.operation;
    const client = await db.connect();
    const { movieName, posterURL } = request.body;
    if (operation === 'INSERT') {
        try {
            await client.sql`INSERT INTO watchlist (userID, movieName, movieposterURL) VALUES (${userID}, ${movieName}, ${posterURL});`;
            return response.status(200).json();
        } catch (error) {
            console.error(`Error adding movie to watchlist: `, error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        try {
            await client.sql`DELETE FROM watchlist WHERE (userID = ${userID}) AND (movieName = ${movieName});`;
            return response.status(200).json();
        } catch (error) {
            console.error(`Error removing movie from watchlist: `, error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}