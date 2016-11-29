import React from 'react'
import { movies } from '../data'

const Movies = () => {
  var movieList = movies.map(movie => {
    return(
      <div>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>{movie.genres}</ul>
      </div>
    )
  })
    return (
        <div>
            <h1>Movies Page</h1>
            {movieList}
        </div>
    )
}

module.exports = Movies
