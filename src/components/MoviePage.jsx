import React from 'react'
import { Header } from './Header/Header'
import { MovieInfo } from './MovieInfo/MovieInfo'
import { DisplayUserReviews } from './DisplayUserReviews/DisplayUserReviews'
import { Footer } from './Footer/Footer'
import "./MoviePage.css"
import { useLocation } from 'react-router-dom';

export const MoviePage = () => {
  const location = useLocation();
  const movieInfo = location.state.movieInfo;
  const storedValue = sessionStorage.getItem('username');

  return (
    <>
      <div id="page-1">
        <Header username={storedValue}/>

        <MovieInfo 
        title={movieInfo.title} 
        description={movieInfo.overview} 
        date={movieInfo.release_date}
        poster={movieInfo.poster_path}
        backdrop={movieInfo.backdrop_path}
        />
      </div>

      <div id="page-2">
        <DisplayUserReviews title={movieInfo.title}/>
        <Footer/>
      </div>
    </>
  )
}
