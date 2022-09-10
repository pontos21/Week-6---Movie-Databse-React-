import React from 'react'
import './Home.css'
import movies from '../assets/movies.mp4'
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
   <div className='home'>
    <div className="overlay"></div>
    <video src={movies} autoPlay loop muted />
    <div className="home__container">
        <div className="home__row">
            <div className='home__content'>
                <h1>Welcome to <span className='grey__text'>OMDb</span> Movie <span className='purple__text'>Databse</span></h1>
                <p className='home__content--para'>Browse through the best Box Office films</p>
            </div>
            <div className='search__box'>
            <input placeholder="Search Films..." type="text" />
            <div className='search__btn'>
                <SearchIcon />
            </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Home