import React from "react"; 
import './App.css';
import Row from './Row'; 
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix clone</h1>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
