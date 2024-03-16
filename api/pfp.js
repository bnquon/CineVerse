import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();
    const operation = request.query.operation;

    if (operation == 'post') {

        try {
            const { newPFP } = request.body;
            if (newPFP != null) {
                await client.sql`INSERT INTO userinfo (userID, pfp)
                                VALUES (${userID}, ${newPFP})
                                ON CONFLICT (userID)
                                DO UPDATE SET pfp = ${newPFP};`;
            }
            
            return response.status(200).json();
    
        } catch (error) {
            console.error('Error saving user pfp:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    
    } else {

        try {
            let pfp = null;
            const getPFPResult = await client.sql`SELECT pfp FROM userinfo WHERE userID = ${userID};`;
            
            if (getPFPResult.rows.length > 0) pfp = getPFPResult.rows[0];

            return response.status(200).json({ retrievedPFP: pfp });
    
        } catch (error) {
            console.error('Error saving user pfp:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }

    }


}