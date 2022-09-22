// http://www.omdbapi.com/?i=tt3896198&apikey=79968113

async function getMovies() {
    const movies = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=79968113")
    const moviesData = await movies.json()
    console.log(moviesData)
}
getMovies()
