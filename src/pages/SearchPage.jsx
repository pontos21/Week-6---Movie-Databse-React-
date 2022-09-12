import React from 'react'
import './SearchPage.css'
import SearchIcon from '@mui/icons-material/Search'


function SearchPage() {
  return (
    <div id="search__page">
        <div className="movies__container">
          <div className="row">
          <div className="search__header">
            <h1 className='search__title'><span className='red__text'>Browse</span> Our Library</h1>
            <div className="search__input">
              <input placeholder="Search Films..." type="text" />
            </div>
            <div className='search__btn'>
              <SearchIcon />
            </div>
          </div>
          <div className="movies">
            <div className="movie">
              <figure>
                <img src="" alt="" />
              </figure>
              <div className="movie__info">
                
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default SearchPage