import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CreateUserPage.css"

export const CreateUserPage = () => {


    const navigate = useNavigate();

    const handleClick = async () => {
        const input = document.getElementById('loginUsername').value;

        try {
            const response = await fetch('/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: input }),
            });

            if (response.ok) {
                const responseData = await response.json(); // Parse response body as JSON
                console.log(responseData);
                // const newUser = responseData.username;
                // const newUserID = responseData.userID;
                // sessionStorage.setItem('username', newUser);
                // sessionStorage.setItem('userID', newUserID);
                // console.log(newUser + ' ' + newUserID);
                navigate("./user");
            } else {
                console.error('Failed to create user:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating user:', error.message);
        }
    }
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     const input = document.getElementById('loginUsername').value;
    //     sessionStorage.setItem('username', input);
    //     navigate("./user");
    // }

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