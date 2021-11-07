

                


    // ######################## LOADING NEW MOVIES #######################
    // loading movies from an API

const API_KEY = 'api_key=59bd36485e48b74f11a8fa2c2fca8679';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&' + API_KEY;
const API_URL_1 = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const API_URL_2 = BASE_URL + '/discover/movie?with_genres=18&primary_release_year=2014&' + API_KEY;
const API_URL_3 = BASE_URL + '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&' + API_KEY;
const API_URL_4 = BASE_URL + '/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&' + API_KEY;
const IMG = 'https://image.tmdb.org/t/p/w500';

const main = document.querySelector('.responsive-1')
const main2 = document.querySelector('.responsive-2')
const main3 = document.querySelector('.responsive-3')
const main4 = document.querySelector('.responsive-4')
const main5 = document.querySelector('.responsive-5')


const loadingData = function (curURL, section) {

  getChildMovies(curURL);
function getChildMovies(url) {
      fetch(url).then(res => res.json()).then(data => {
            console.log(data)
            showChildMovies(data.results)
      })
}
// main.style.opacity = '0';
function showChildMovies(data) {
      // main.innerHTML = ' ';
      data.forEach((movie, i) => {
            const {vote_average, title, overview, poster_path, vote_count} = movie;
            // element +=
            const movieEl = document.createElement('div')
            movieEl.classList.add('movie');
        movieEl.innerHTML =
            `
            <div class="movie_img">
                                          <img src="${IMG + poster_path}" alt="">
                                    </div>
                                    <div class="movie_info">
                                                <h1 class="movie_title">${title}</h1>
                                                <span>
                                                      <h2 class="genre">${vote_count} +</h2>
                                                      <span class="rate">${vote_average}</span>
                                                </span>
                                          </div>
                                          <div class="overview">
                                                <h1>overview</h1>
                                                <p>
                                                    ${overview}
                                                </p>
                                                <button class="btn_watch">watch now</button>
                                          </div>
            `

            section.appendChild(movieEl)
      })
}
}

loadingData(API_URL, main)
loadingData(API_URL_1, main2)
loadingData(API_URL_2, main3)
loadingData(API_URL_3, main4)
loadingData(API_URL_4, main5)

$(document).ready(function () {

  setTimeout(function () {
    $('.response').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    main.style.opacity = '1';
  }, 3000)


  $('.toggle-ball').click(function () {
    $(this).toggleClass('left')
  })
})



fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
		"x-rapidapi-key": "b6c81705b2msh6dba127d0f600f5p18c3f6jsn68cd5abde8d2"
	}
})
  .then(res => res.json()).then(data => {
  console.log(data)
})
.catch(err => {
	console.error(err);
});