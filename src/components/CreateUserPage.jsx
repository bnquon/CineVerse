import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../backend/api/createUser';
import "./CreateUserPage.css"

export const CreateUserPage = () => {

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     const input = document.getElementById('loginUsername').value;

    //     fetch('')
    //     sessionStorage.setItem('username', input);
    //     // change back to user after implementing add review button
    //     navigate("./movie");
    // }


  const handleClick = async () => {
    try {
      const username = document.getElementById('loginUsername').value;
      await createUser(username);
      navigate('/user'); // Redirect to home or another page after successful user creation
    } catch (error) {
      console.error('Error creating user:', error.message);
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
}
