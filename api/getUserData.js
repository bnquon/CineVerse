import { db } from "@vercel/postgres";

export default async function handler(request, response) {
    const userID = request.query.userID;
    const client = await db.connect();

    try {
        
        // Getting user datejoined, bio, watchlist
        let existingBio = null;
        const existingBioResult = await client.sql`SELECT bio FROM userInfo WHERE userID = ${userID};`;
        
        if (existingBioResult.rows.length > 0 ) {
            existingBio = existingBioResult.rows[0];
        }

        const watchlistResult = await client.sql`SELECT movieposterURL FROM watchlist WHERE userID = ${userID};`;
        const watchlist = watchlistResult.rows;

        const datejoinedResult = await client.sql`SELECT datejoined FROM users WHERE userID = ${userID};`;
        const dateJoined = datejoinedResult.rows[0];

        // return response.status(200).json({ bio: existingBio, savedWatchlist: watchlist, dateJoined: dateJoined});

        // Getting user reviews
        const listOfReviewsResults = await client.sql`SELECT * FROM reviews WHERE userID = ${userID} ORDER BY reviewID DESC;`;
        const listOfReviews = listOfReviewsResults.rows;
        // return response.status(200).json({ reviews: listOfReviews.rows});

        // Getting user rating distribution
        const listOfRatingsResults = await client.sql`
                SELECT
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
                    userID = ${userID};`;
        
        let listOfRatings = {
            n1: 0,
            n2: 0,
            n3: 0,
            n4: 0,
            n5: 0,
            n6: 0,
            n7: 0,
            n8: 0,
            n9: 0,
            n10: 0
        };

        if (listOfRatingsResults) {
            listOfRatings = listOfRatingsResults.rows[0];
        }
        // return response.status(200).json({ratingDistribution : listOfRatings.rows[0]});

        return response.status(200).json({
                                            bio: existingBio,
                                            savedWatchlist: watchlist,
                                            dateJoined: dateJoined,
                                            reviews: listOfReviews,
                                            ratings: listOfRatings,
                                        })
                

    } catch (error) {
        
        console.error('Error retrieving UserData:', error);
        return response.status(500).json({ error: 'Internal Server Error' });

    }

}