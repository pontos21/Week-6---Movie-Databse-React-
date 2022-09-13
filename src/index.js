import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



async function getMovies(searchValue = 'Aliens') {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=79968113`)
  const moviesData = await response.json()
  const moviesListEl = document.querySelector(".movies-list")
  console.log(moviesData)

  moviesListEl.innerHTML = moviesData.Search.map((movie) => generateMovieHTML(movie)).join("") 
}
getMovies()



function generateMovieHTML(movie) {
  return `<div className="movie">
  <figure className='movie__img--wrapper'>
    <img src=${movie.Poster} alt="" />
  </figure>
  <div className="movie__info">
      <div className="div">${movie.Title}</div>
      <div className="movie__year">${movie.Year}</div>
  </div>
</div>`
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
