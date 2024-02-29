import { sql } from "@vercel/postgres";

export default async function createUser(req, res) {
    try {
        const { username } = request.body;
        await sql`INSERT INTO users (username) VALUES (${username});`;
    } catch (error) {
        return response.status(500).json({ error });
    }
}