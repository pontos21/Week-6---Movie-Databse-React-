import React, { useState, useEffect } from 'react'
import '../components/Home.css'
import movies from '../assets/movies.mp4'
import SearchIcon from '@mui/icons-material/Search';
import HomeVideo from './ui/HomeVideo'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Home() {

    
    
   
    const [input, setInput] = useState("");
    const navigate = useNavigate()

    function handleClick() {
        navigate('/movies')
        
    }

   
    
    
  
   return (
    <div className='home'>
    <div className="overlay"></div>
    <video src={movies} className="video" autoPlay loop muted />
    <HomeVideo video={movies}/>
    <div className="home__container">
        <div className="home__row">
            <div className='home__content'>
                <h1>Welcome to <span className='grey__text'>OMDb</span> Movie <span className='purple__text'>Databse</span></h1>
                <p className='home__content--para'>Browse through the <span className='yellow__text'>Best</span> Box Office films</p>
            </div>
            <div className='search__box'>
            <input placeholder="Search Films..." type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(event) => (event.key === 'Enter' && handleClick())} />
            <div className='search__btn'>
                <SearchIcon onClick={handleClick} />
            </div>
            </div>
        </div>
    </div>
   </div>
   )

}

export default Home