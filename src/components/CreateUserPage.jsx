import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CreateUserPage.css"
import backgroundImage from '../assets/test.webp'

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
                // console.log(responseData);
                const newUser = responseData.user.username;
                const newUserID = responseData.user.userid;
                sessionStorage.setItem('username', newUser);
                sessionStorage.setItem('userID', newUserID);
                console.log(newUser + ' ' + newUserID);
                navigate("./user");
            } else {
                console.error('Failed to create user:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating user:', error.message);
        }
    }

    const showSignup = () => {
        document.getElementById('signup').classList.add('signup-form');
        document.getElementById('signup').classList.remove('login-form');
        document.getElementById('login').classList.add('signup-form');
        document.getElementById('login').classList.remove('login-form');
    }

    const showLogin = () => {
        document.getElementById('signup').classList.add('login-form');
        document.getElementById('signup').classList.remove('signup-form');
        document.getElementById('login').classList.add('login-form');
        document.getElementById('login').classList.remove('signup-form');
    }

    // document.getElementById('gotosignup').addEventListener('click', () => {
    //     document.getElementById('signup').classList.add('signup-form');
    //     document.getElementById('signup').classList.remove('login-form');
    // })

    // document.getElementById('gotologin').addEventListener('click', () => {
    //     document.getElementById('signup').classList.add('login-form');
    //     document.getElementById('signup').classList.remove('signup-form');
    // })

    return (
        <>    
            <div id="page-container">
                <div id="bgImageContainer">
                    <img id='bgImage' src={backgroundImage} alt="" />
                </div>

                <div id="form">
        
                    <div id="login">
                        <h1>LOGIN</h1>
                        <label for="username">Username</label>
                        <input type="text" name="username" id="loginUsername"/>
                        <label for="password">Password</label>
                        <input type="text" name="password" id=""/>
                        <button onClick={handleClick}>SUBMIT</button>
                        <button id='gotosignup' onClick={showSignup}>Sign up instead</button>
                    </div>

                    <div id="signup">
                        <h1>Sign Up</h1>
                        <label for="username">Username</label>
                        <input type="text" name="username" id=""/>
                        <label for="password">Password</label>
                        <input type="text" name="password" id=""/>
                        <button id="gotologin" onClick={showLogin}>Login instead</button>
                    </div>

                </div>
                
            </div>
        </>
    )
}