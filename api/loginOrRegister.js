import bcrypt from 'bcrypt'
import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const { username, password } = request.body;
    const client = await db.connect();
    const val = request.query.val;

    if (val == 1) {
        try {
            const checkCredentials = await client.sql`SELECT * FROM users WHERE username = ${username};`;
            if (checkCredentials == null) {
                return response.status(404).json({ success: false });
            }
    
            const retrievedPassword = checkCredentials.rows[0].password;
            if (await bcrypt.compare(password, retrievedPassword)) {
                return response.status(200).json({ success: true, retrievedUserInfo: checkCredentials.rows[0] })
            } else {
                return response.status(401).json({ success: false });
            }
    
        } catch (error) {
            console.error('Error during login:', error.message);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        try {
            const checkIfUserExists = await client.sql`SELECT COUNT(*) FROM users WHERE username = ${username};`;
            const userExists = parseInt(checkIfUserExists.rows[0].count) === 1;
            if (userExists) {
                return response.status(409).json({ success: false })
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const curDate = new Date();
            const options = { month: 'short', day: '2-digit', year: 'numeric' };
            const formattedDate = curDate.toLocaleDateString('en-US', options);
            // await client.sql`INSERT INTO userinfo (datejoined) VALUES (${formattedDate});`;
            const insertResult = await client.sql`INSERT INTO users (username, password, datejoined) VALUES (${username}, ${hashedPassword}, ${formattedDate}) RETURNING *;`;
            await client.sql`INSERT INTO userinfo (userID) VALUES (${(insertResult.rows[0]).userid})`
            return response.status(200).json({ success: true, retrievedUserInfo: insertResult.rows[0] });

        } catch (error) {
            console.error('Error during registration:', error.message);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}