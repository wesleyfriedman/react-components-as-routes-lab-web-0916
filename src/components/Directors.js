import React from 'react'
import { directors } from '../data'

const Directors = () => {
  var directorList = directors.map(director => {
    return(
      <div>
        <p>{director.name}</p>
        <ul>{director.movies.join(', ')}</ul>
      </div>
    )
  })
    return (
        <div>
            <h1>Directors Page</h1>
            {directorList}
        </div>
    )
}

module.exports = Directors
