import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const username = request.query.username;
    const client = await db.connect();

    try {
        let searchedUser = null;
        const searchResult = await client.sql`SELECT userID, username FROM users WHERE username ILIKE ${username}'%';`;

        if (searchResult.rows.length > 0) {
            searchedUser = searchResult.rows[0];
        }

        return response.status(200).json({ searchedUser: searchedUser});

    } catch (error) {
        console.error("Error searching for user:", error);
        return response.status(500).json({ error: "Internal Server Error" });
    }

}