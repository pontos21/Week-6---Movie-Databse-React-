import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import spiderman from '../assets/spiderman.jpg'


function MovieInfo() {
    const { id } = useParams()
    const [movie, setMovie] = useState([])
  

  async function getMovieDetails(id) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}api_key=c5339e7f37bc49952c323306fac80cff&language=en-US`)
    setMovie(data)
    console.log(data);
  }

  useEffect(() => {
    getMovieDetails(id)
  },[])
  
 
    
    
  return (
    <div className="movie__container">
      <div className="movies__row">
        <div className="movie__back">
          <Link to="/movies">
            <Button>
              <ArrowBackIcon />
              Back
            </Button>
          </Link>
        </div>
      </div>
          <div className="movie__selected">
            <figure className="movie__selected--figure">
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="movie__selected--img" alt="" />
            </figure>
            <div className="movie__selected--description" >
              <h2 className="movie__selected--title">{movie.title}</h2>
              <h3 className="movie__selected--year">
                <b>Release Date:</b>
                {movie.release_date}
              </h3>
              <h4 className="movie__selected--length">
                <b>Runtime:</b>
                {movie.runtime}
              </h4>
              <div className="summary">
                <b>Summary</b>
                <p>
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
    </div>
  );
}

export default MovieInfo