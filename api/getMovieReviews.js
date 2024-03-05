import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const movieName = request.query.movieName;
    const client = await db.connect();

    try {
        const data = await client.sql`SELECT review, rating FROM reviews WHERE movieName = ${movieName};`;
        return response.status(200).json({ listOfReviews: data.rows });
    } catch (error) {
        console.error('Error fetching movie reviews:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}