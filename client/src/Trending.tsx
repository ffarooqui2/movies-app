import { useEffect, useState } from 'react'
import './App.css'
import {NavBar} from './NavBar'

function Trending() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <>
      <NavBar />
      <h2>Whats Trending</h2>
      <div className = "table">
      {
        data.map(movie => {
          return (
            <>
            <div className = 'movie-card' key ={movie.id}>
              {movie.title}
              <div>
                <img src = {movie.image} atl ="image" className = "movie-card-image"/>
              </div>
            </div>
            </>
          )
        })
      }
      </div>
    </>
  )
}

export default Trending