import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CreateUserPage.css"
import backgroundImage from '../assets/test.webp'

export const CreateUserPage = () => {


    const navigate = useNavigate();

    // const handleClick = async () => {
    //     const input = document.getElementById('loginUsername').value;

    //     try {
    //         const response = await fetch('/api/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ username: input }),
    //         });

    //         if (response.ok) {
    //             const responseData = await response.json(); // Parse response body as JSON
    //             // console.log(responseData);
    //             const newUser = responseData.user.username;
    //             const newUserID = responseData.user.userid;
    //             sessionStorage.setItem('username', newUser);
    //             sessionStorage.setItem('userID', newUserID);
    //             console.log(newUser + ' ' + newUserID);
    //             navigate("./user");
    //         } else {
    //             console.error('Failed to create user:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error creating user:', error.message);
    //     }
    // }

    // val = true for login, val = false for register
    const loginOrRegisterUser = async (val) => {

        var username, password;

        if (val == 1) {
            username = document.getElementById('loginUsername').value;
            password = document.getElementById('loginPassword').value;
        } else {
            username = document.getElementById('newUsername').value;
            password = document.getElementById('newPassword').value;
        }

        try {
            const response = await fetch(`/api/loginOrRegister?val=${val}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password}),
            })
            if (response.ok) {
                const userData = await response.json();
                console.log('Data sent back by logging in is: ', userData);
                const temp = userData.retrievedUserInfo;
                const username = temp.username;
                const userID = temp.userid;
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('userID', userID);
                const data = {userid: userID, username: username};
                navigate("./user", { state: { data } });
            } else console.error('Failed to login: ', response.statusText);
        } catch (error) {
            console.error('Error creating user: ', error.message);
        }
    }


    // const registerUser = async () => {
    //     const registerUsername = document.getElementById('newUsername').value;
    //     const registerPassword = document.getElementById('newPassword').value;
    //     if (registerUsername == null || registerPassword == null) {
    //         alert('Username and password must be filled');
    //     } else {
    //         try {
    //             const response = await fetch('/api/createUser', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ username: registerUsername, password: registerPassword}),
    //             });
    //             if (response.ok) {
    //                 const newUserData = await response.json();
    //                 const temp = newUserData.retrievedUserInfo;
    //                 console.log('Data sent back by creating user is: ', newUserData);
    //                 const newUser = temp.username;
    //                 const newUserID = temp.userID;
    //                 sessionStorage.setItem('username', newUser);
    //                 sessionStorage.setItem('userID', newUserID);
    //                 navigate("./user");
    //             } else console.error('Failed to create new user: ', response.statusText);
    //         } catch (error) {
    //             console.error('Error creating user: ', error.message);
    //         }
    //     }

    // }

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

    return (
        <>    
            <div id="page-container">
                <div id="bgImageContainer">
                    <img id='bgImage' src={backgroundImage} alt="" />
                </div>

                <div id="form">
        
                    <div id="login">
                        <div class="formname">
                            <h1>LOGIN</h1>
                        </div>
                        <div class="inputs">
                            <input type="text" name="username" id="loginUsername" placeholder='Username' required/>
                            <input type="password" name="password" id="loginPassword" placeholder='Password' required/>
                        </div>
                        <button id='loginBtn' onClick={() => loginOrRegisterUser(1)}>Login</button>
                        <div class="loginnav">
                            <h3>Don't have an account? </h3>
                            <button id='gotosignup' onClick={showSignup}>Create User</button>
                        </div>
                        {/* <input type="text" name="username" id="loginUsername" placeholder='Username'/>
                        <input type="text" name="password" id="loginPassword" placeholder='Password'/>
                        <button id='loginBtn' onClick={loginUser}>Login</button>
                        <button id='gotosignup' onClick={showSignup}>Create User</button> */}
                    </div>

                    <div id="signup">
                        <div class="formname">
                            <h1>SIGN UP</h1>
                        </div>
                        <div class="inputs">
                            <input type="text" name="username" id="newUsername" placeholder='New Username' required/>
                            <input type="password" name="password" id="newPassword" placeholder='New Password' required/>
                        </div>
                        <button id="signupBtn" onClick={() => loginOrRegisterUser(0)}>Sign Up</button>
                        <div class="loginnav">
                            <h3>Already have an account? </h3>
                            <button id="gotologin" onClick={showLogin}>Login</button>
                        </div>
                        {/* <input type="text" name="username" id="newUsername" placeholder='New Username'/>
                        <input type="text" name="password" id="newPassword" placeholder='New Password'/>
                        <button id="signupBtn" onClick={registerUser}>Sign Up</button>
                        <button id="gotologin" onClick={showLogin}>Login</button> */}
                    </div>

                </div>
                
            </div>
        </>
    )
}