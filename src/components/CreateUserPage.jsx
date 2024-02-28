import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CreateUserPage.css"

export const CreateUserPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("./user");
    }

    return (
        <>    
            <div id="page-container">
                <div id='container'>
                    USERNAME
                    <input type="text" />
                    <button type='submit' onClick={handleClick}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}
