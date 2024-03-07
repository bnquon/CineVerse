import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const { username, userID, movieName, review, rating, poster } = request.body;
    const client = await db.connect();

    try {
        await client.sql`
                        INSERT INTO reviews (userID, moviename, rating, review, movieposterurl, username)
                        VALUES (${userID}, ${movieName}, ${rating}, ${review}, ${poster}, ${username});`;
        return response.status(200).json();
    } catch (error) {
        console.error('Error posting review:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }

}