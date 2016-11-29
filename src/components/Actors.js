import React from 'react'
import { actors } from '../data'

const Actors = () => {
  var actorsList = actors.map(actor => {
    return(
      <div>
        <p>{actor.name}</p>
        <ul>{actor.movies.join(', ')}</ul>
      </div>
    )
  })
    return (
        <div>
            <h1>Actors Page</h1>
            {actorsList}
        </div>
    )
}

module.exports = Actors
