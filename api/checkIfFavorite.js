import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const movieName = request.query.movieName
    const client = await db.connect();
    try {
        const temp = await client.sql`SELECT COUNT(movieName) AS num FROM favorites WHERE movieName = ${movieName} AND userID = ${userID};`;
        const temp2 =await client.sql`SELECT COUNT(movieName) AS num FROM watchlist WHERE movieName = ${movieName} AND userID = ${userID};`;
        return response.status(200).json( {isFavorited: parseInt(temp.rows[0].num), isBookmarked: parseInt(temp2.rows[0].num)} )
    } catch (error) {
        console.error('Error checking favorited and bookmarked status:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}