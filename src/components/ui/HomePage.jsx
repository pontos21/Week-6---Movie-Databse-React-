import React from 'react'


function HomePage({icon}) {
  return (
    <div className='home'>
    <div className="overlay"></div>
        <div className="home__container">
        <div className="home__row">
            <div className='home__content'>
                <h1>Welcome to <span className='grey__text'>OMDb</span> Movie <span className='purple__text'>Databse</span></h1>
                <p className='home__content--para'>Browse through the <span className='yellow__text'>Best</span> Box Office films</p>
            </div>
            <div className='search__box'>
            <input placeholder="Search Films..." type="text" />
            <div className='search__btn'>
               {icon}
            </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default HomePage