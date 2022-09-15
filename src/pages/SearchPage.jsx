import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SearchPage.css'
import SearchIcon from '@mui/icons-material/Search'
import spiderman from '../assets/spiderman.jpg'
import axios from 'axios'



function SearchPage() {
  const {id} = useParams()

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
  }, [pageNumber]);

 
  
   
  



  return (
    <div className="search__page">
        <div className="movies__container">
          <div className="row">
          <div className="search__header">
            <h1 className='search__title'><span className='red__text'>Browse</span> Our Library</h1>
            <div className="search__input">
              <input placeholder="Search Films..." type="text" onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className='search__input--btn'>
              {/* <SearchIcon onClick={getMovies}/> */}
            </div>
          </div>
          {movies.map((movie) => {
              <div className="movies-list">
            <div className='movie'>
              <figure className='movie__img--wrapper'>
                <img src={searchValue} alt="" />
              </figure>
              <div className="movie__info">
                  <div className="div">{movie.title}</div>
                  <div className="movie__year">{movie.year}</div>
              </div>
            </div>
          </div>
            })}
          </div>
        </div>
    </div>
  )
}

export default SearchPage