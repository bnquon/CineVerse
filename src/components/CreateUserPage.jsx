import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./CreateUserPage.css";

export const CreateUserPage = () => {
    const navigate = useNavigate();

    const handleClick = async () => {
        const input = document.getElementById('loginUsername').value;

        try {
            // Make the fetch POST call to the createUser endpoint
            const response = await fetch('https://bquoncineverse.vercel.app/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: input,
                }),
            });

            // Check if the request was successful (status code 2xx)
            if (response.ok) {
                // Assuming the server returns JSON data, you can parse it
                const data = await response.json();
                console.log(data);
                // Perform any additional actions here
                sessionStorage.setItem('username', input);
                // change back to user after implementing add review button
                navigate("./movie");
            } else {
                // Handle error cases
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            // Handle errors that occurred during the fetch
            console.error('Error during fetch:', error);
        }
    }

    return (
        <>    
            <div id="page-container">
                <div id='form-container'>
                    <h1>Username</h1>
                    <input id='loginUsername' type="text" />
                    <button type='submit' onClick={handleClick}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}
