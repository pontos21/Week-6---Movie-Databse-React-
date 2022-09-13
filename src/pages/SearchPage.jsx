import React from 'react'
import './SearchPage.css'
import SearchIcon from '@mui/icons-material/Search'
import spiderman from '../assets/spiderman.jpg'


function SearchPage() {
  return (
    <div className="search__page">
        <div className="movies__container">
          <div className="row">
          <div className="search__header">
            <h1 className='search__title'><span className='red__text'>Browse</span> Our Library</h1>
            <div className="search__input">
              <input placeholder="Search Films..." type="text" />
            </div>
            <div className='search__input--btn'>
              <SearchIcon />
            </div>
          </div>
          <div className="movies-list">
            <div className='movie'>
              <figure className='movie__img--wrapper'>
                <img src alt="" />
              </figure>
              <div className="movie__info">
                  <div className="div">Spider-Man</div>
                  <div className="movie__year">2002</div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default SearchPage