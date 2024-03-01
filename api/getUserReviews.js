import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();
    try {
        const listOfReviews = await client.sql`SELECT * FROM reviews WHERE user_ID = ${userID};`;
        return response.status(200).json({ reviews: listOfReviews.rows});
    } catch (error) {
        console.error('Error getting user reviews:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}