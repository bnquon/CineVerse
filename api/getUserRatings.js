import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();

    try {
        const listOfRatings = await client.sql`
            SELECT
                SUM(CASE WHEN rating = 0 THEN 1 ELSE 0 END) AS n0,
                SUM(CASE WHEN rating = 1 THEN 1 ELSE 0 END) AS n1,
                SUM(CASE WHEN rating = 2 THEN 1 ELSE 0 END) AS n2,
                SUM(CASE WHEN rating = 3 THEN 1 ELSE 0 END) AS n3,
                SUM(CASE WHEN rating = 4 THEN 1 ELSE 0 END) AS n4,
                SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS n5,
                SUM(CASE WHEN rating = 6 THEN 1 ELSE 0 END) AS n6,
                SUM(CASE WHEN rating = 7 THEN 1 ELSE 0 END) AS n7,
                SUM(CASE WHEN rating = 8 THEN 1 ELSE 0 END) AS n8,
                SUM(CASE WHEN rating = 9 THEN 1 ELSE 0 END) AS n9,
                SUM(CASE WHEN rating = 10 THEN 1 ELSE 0 END) AS n10
            FROM 
                reviews
            WHERE 
                user_ID = ${userID};`;
        
        return response.status(200).json({ratingDistribution : listOfRatings.rows[0]});

    } catch (error) {
        console.error('Error getting user ratings:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}