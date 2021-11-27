import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div className="app">   

      <Nav/>

      <Banner />

      <Row 
            title="Netflix Originals" 
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
