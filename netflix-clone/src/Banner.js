import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[4]
      );
      return request;
    }
    fetchData();
  }, []);


  return (
    <header className="banner"
          style={{
              backgroundSize: 'cover',
              backgroundImage: `url("http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg${movie.backdrop_path}")`,
              backgroundPosition: 'center center'
        }}>
      <div className="banner_contents">
        <h1>
          {movie.name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
          {movie.overview}
          <br />
        </h1>

      </div>
      <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner;