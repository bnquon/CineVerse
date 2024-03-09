import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const movieName = request.query.movieName
    const client = await db.connect();
    try {
        const temp = await client.sql`SELECT COUNT(Favoritemoviename) AS num FROM favorites WHERE Favoritemoviename = ${movieName} AND User_id = ${userID};`;
        return response.status(200).json( {isFavorited: temp.rows[0]} )
    } catch (error) {
        console.error('Error checking favorited status:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}