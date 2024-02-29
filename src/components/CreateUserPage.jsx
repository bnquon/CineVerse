import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./CreateUserPage.css";

export const CreateUserPage = () => {

    const navigate = useNavigate();

    const handleClick = async () => {
        const input = document.getElementById('loginUsername').value;

        try {
            const response = await fetch('http://localhost:3001/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: input,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            sessionStorage.setItem('username', input);
            navigate("./movie");
        } catch (error) {
            console.error('Error creating user:', error.message);
            // Handle error (show message to user, log, etc.)
        }
    };

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
};
