import React, {useState} from 'react'
import { Header } from "./Header/Header.jsx";
import { Grid } from "./Grid/Grid.jsx";
import { useLocation } from 'react-router-dom';
import { Puff } from 'react-loading-icons'

export const UserPage = () => {

  const [gridLoaded, setGridLoaded] = useState(false);

  const location = useLocation();
  const searchedUserData = location.state?.data;
  console.log('SEARCHEDUSERDATA IS', searchedUserData);

  const storedUsername = sessionStorage.getItem('username');

  useEffect(() => {
    setGridLoaded(true);
  }, [searchedUserData]);

  return (
    <>         
        <Header username={storedUsername}/>
        {gridLoaded ? <Grid username = {(searchedUserData).username} userID = {(searchedUserData).userID}/> 
        :
        <Puff stroke="#98ff98" speed={.75}/>
        }
    </>
  )
}
