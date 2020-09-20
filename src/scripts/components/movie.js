export function moviesListView () {

    var moviesRes;

    const searchLink = {
        trending: "https://api.themoviedb.org/3/trending/movie/week?api_key=8c2c6dae25654c89d76cbccd4f085a85&language=en",
        upcomingReleases: ""
    }

    var searchFetch = searchLink.trending;

    fetch(searchFetch)
    .then(response => response.json())
    .then(response => moviesRes = response)
    .then(() =>{
        console.log(moviesRes);

        console.log(moviesRes.results);

        moviesRes.results.forEach((movie, i) => {

            var newDiv = document.getElementById('results');

            var imgSrc = 'https://image.tmdb.org/t/p/w500';

            var str = `<li class="movielist__card" id="movie`+ i +`"><a href="#">
                    <img src="`+ imgSrc + moviesRes.results[i].poster_path +`" alt=" Poster of `+ moviesRes.results[i].title +`">
                    <h3>`+ moviesRes.results[i].title +`</h3>
                    <p class="average">`+ moviesRes.results[i].vote_average +`</p>
                    <p class="release">`+ moviesRes.results[i].release_date +`</p>
                    </a></li>`;

            newDiv.insertAdjacentHTML( 'beforeend', str );

        });




    })
    .catch(error => alert("Erreur : " + error));
}
