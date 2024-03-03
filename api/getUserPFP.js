import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();

    try {
        const existingPFPResult = await client.sql`SELECT ProfilePicture FROM users WHERE userID = ${userID};`;
        const existingPFP = existingPFPResult[0]?.Profilepicture;

        // Convert Buffer to base64 string
        const profilePictureBase64 = existingPFP ? existingPFP.toString('base64') : null;
        
        return response.status(200).json({ profilePicture: profilePictureBase64 });
    } catch (error) {
        console.error('Error getting user profile picture:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}