import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();
    try {
        const data = await client.sql`SELECT * FROM favorites WHERE user_ID = ${userID};`;
        const listOfFavorites = data.rows;
        return response.status(200).json({ listOfFavorites: listOfFavorites});
    } catch (error) {
        console.error('Error getting favorites:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}