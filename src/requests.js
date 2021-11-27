const API_KEY = "b7f73dab20eb8e5b985d94ca67a9a009";

const requests = {
    fetchTrendingNow: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
}

export default requests;