// api -gets first 30 results sorted by popular movies desc
// img -pulls img of movies 
//search -api pulls movies with search query

const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=63aaf07e1c839389dad481b7331b0094&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'  
const SEARCH_API = 'http://api.themoviedb.org/3/search/movie?api_key=63aaf07e1c839389dad481b7331b0094&page=1&query="'


// add to the DOM
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// get initial movies
getMovies(API_URL)


// requests data and then json gives actual data
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}


// shows movies with all data
function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        // creating div and adding to DOM
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        // adds all info to the DOM
        movieEl.innerHTML = `
             <img src="${IMG_PATH + poster_path}" alt="${title}">
             <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="${getClassByRate(vote_average)}">${vote_average}</span>
             </div>
            <div class="overview">
              <h3>Overview</h3>
              ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}

// set rating of movies
function getClassByRate(vote) {
    if(vote >= 8) { 
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


// allows type in search box to search movie by word
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value 

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
      }
    })