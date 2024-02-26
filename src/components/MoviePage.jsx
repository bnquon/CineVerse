import React from 'react'
import { Header } from './Header/Header'
import { MovieInfo } from './MovieInfo/MovieInfo'
import { DisplayUserReviews } from './DisplayUserReviews/DisplayUserReviews'
import { Footer } from './Footer/Footer'
import "./MoviePage.css"

export const MoviePage = () => {
  return (
    <>
      <div id="page-1">
        <Header/>
        <MovieInfo/>
      </div>

      <div id="page-2">
        <DisplayUserReviews/>
        <Footer/>
      </div>
    </>
  )
}
