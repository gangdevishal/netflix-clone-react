import { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios";
import { base_url_poster } from "../../request";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// eslint-disable-next-line react/prop-types
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [isMoviesTrailer, setIsMoviesTrailer] = useState("");

  const fetchMoviesData = async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  };
  useEffect(() => {
    fetchMoviesData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (isMoviesTrailer) {
      setIsMoviesTrailer("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setIsMoviesTrailer(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies &&
          movies.map((movie) => {
            return (
              <>
                <img
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  className={`row-poster ${isLargeRow && "row-poster-large"}`}
                  src={`${base_url_poster}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              </>
            );
          })}
      </div>
      {isMoviesTrailer && <YouTube videoId={isMoviesTrailer} opts={opts} />} ;
    </div>
  );
};

export default Row;
