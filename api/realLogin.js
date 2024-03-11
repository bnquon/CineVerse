import bcrypt from 'bcrypt'
import { db } from '@vercel/postgres'

export default async function handler(request, response) {
    const { username, password } = request.body;
    const client = db.connect();
    try {
        const response = await client.sql`SELECT * FROM users WHERE username = ${username};`;
        if (response == null) {
            return response.status(404).json({ success: false });
        }

        const retrievedPassword = response.rows[0].password;
        if (await bcrypt.compare(password, retrievedPassword)) {
            return response.status(200).json({ success: true, retrievedUserInfo: response.rows[0] })
        } else {
            return response.status(401).json({ success: false });
        }

    } catch (error) {
        console.error('Error during login:', error.message);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}