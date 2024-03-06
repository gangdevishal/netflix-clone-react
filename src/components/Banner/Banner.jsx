import "./Banner.css";
import requests, { base_url_poster } from "../../request";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  const fetchMovieData = async () => {
    const response = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
    return response;
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  //

  // 1) background image
  // 2) title
  // 3) two buttons
  // 4) description
  return (
    <header
      className="banner__header"
      style={{
        backgroundImage: `url(${base_url_poster}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
