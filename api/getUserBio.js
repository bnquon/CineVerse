import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();

    try {
        let existingBio = null;
        const existingBioResult = await client.sql`SELECT bio FROM userInfo WHERE userID = ${userID};`;
        
        if (existingBioResult.rows.length > 0 ) {
            existingBio = existingBioResult;
        }

        const watchlistResult = await client.sql`SELECT movieposterURL FROM watchlist WHERE userID = ${userID};`;
        const watchlist = watchlistResult.rows;

        return response.status(200).json({ bio: existingBio, savedWatchlist: watchlist });

    } catch (error) {
        console.error('Error creating user:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }

}