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
    const [movieid, setmovieid] = useState()
 
    async function getmovieId(id) {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c5339e7f37bc49952c323306fac80cff&language=en-US`)
        setmovieid(data)
        console.log(data.data.results)
    }
    getmovieId()
    
    useEffect(() => {
        getmovieId(id)
    }, [])





  return (
    <div className='movie__container'>
        <div className="movies__row">
            <div className="movie__back">
                <Link to="/movies">
                    <Button><ArrowBackIcon />Back</Button>
                </Link>
            </div>
        </div>
        <div className="movie__selected">
            <figure className='movie__selected--figure'>
                <img src={spiderman} className='movie__selected--img' alt="" />
            </figure>
            
            <div className="movie__selected--description">
                {/* {movie.map((movie, i) => <div>{id}</div>)} */}
                <h2 className="movie__selected--title">
                    Spiderman
                </h2>
                <div className='movie__rating'>
                    <img src="" alt="" />
                    <h2>7.0</h2>
                </div>
                <h3 className="movie__selected--year">
                    <b>Release Date</b>
                    "2002"
                </h3>
                <h4 className="movie__selected--length">
                    <b>Runtime</b>
                    "90 mins"
                </h4>
                <h5 className="movie__selected--director">
                    <b>Name:</b>
                    "Spillburg"
                </h5>
                <h5 className="movie__selected--cast">
                    <b>Actors:</b>
                    ""
                </h5>
                <div className='summary'>
                    <b>Summary</b>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus dolores pariatur quos adipisci sunt fugiat vel, corrupti sint reiciendis repellendus, ad, vitae distinctio unde magnam iure porro mollitia nihil asperiores.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieInfo