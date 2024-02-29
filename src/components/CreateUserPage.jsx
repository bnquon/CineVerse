import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CreateUserPage.css"

export const CreateUserPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        const input = document.getElementById('loginUsername').value;


        sessionStorage.setItem('username', input);
        // change back to user after implementing add review button
        navigate("./movie");
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
