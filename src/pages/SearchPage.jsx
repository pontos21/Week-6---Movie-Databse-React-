import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './SearchPage.css'
import SearchIcon from '@mui/icons-material/Search'

import axios from 'axios'



function SearchPage() {
  
  
  
  const [searchValue, setSearchValue] = useState("spiderman");
  const [movies, setMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c5339e7f37bc49952c323306fac80cff&language=en-US&query=${searchValue}&page=${pageNumber}&include_adult=false`
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((e) => console.log(e));
  };



  useEffect(() => {
    getMovies();
  }, [searchValue]);



  return (
    <div className="search__page">
      <div className="movies__container">
        <div className="row">
          <div className="search__header">
            <h1 className="search__title">
              <span className="red__text">Browse</span> Our Library
            </h1>
            <div className="search__input">
              <input placeholder="Search Films..." type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className="search__input--btn">
              <SearchIcon onClick={getMovies} />
            </div>
          </div>
          {movies.slice(0,6).map((movie, i) => {
            return (
              <div className="movies__list" key={i}>
                <div className="movie">
                  <Link to={`/movies/${movie.id}`} >
                    <figure className="movie__img--wrapper">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt=""
                    />
                  </figure>
                  </Link>
                  <div className="movie__info">
                    <div className="movie__title">
                      <p>{movie.title}</p>
                    </div>
                    <div className="movie__year">
                      <p>{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchPage