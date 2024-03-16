import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();

    try {
        const { picture } = request.body;
        await client.sql`INSERT INTO userInfo (userID, pfp)
                        VALUES (${userID}, ${picture})
                        ON CONFLICT (userID)
                        DO UPDATE SET pfp = ${picture};`;
        
        return response.status(200).json();

    } catch (error) {
        console.error('Error saving user pfp:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }

}