import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const movieTitle = request.query.movieName;
    const client = await db.connect();
    try {
        const data = await client.sql`SELECT * FROM reviews WHERE movieName = ${movieTitle};`;
        return response.status(200).json({ movieInfo: data });
    } catch (error) {
        console.error('Error fetching movie ratings and reviews:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}