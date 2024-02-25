import React from 'react'
import { Header } from './Header/Header'
import { MovieInfo } from './MovieInfo/MovieInfo'
import { ArrowIcon } from './ArrowIcon/ArrowIcon'

export const MoviePage = () => {
  return (
    <>
      <Header/>
      <MovieInfo/>
      <ArrowIcon/>
    </>
  )
}
