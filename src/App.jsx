import { useState } from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requests from "./request";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);
  // API_KEY : 62814f52088e4a0611a869728c765de5
  // API_Read_Access_Token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjgxNGY1MjA4OGU0YTA2MTFhODY5NzI4Yzc2NWRlNSIsInN1YiI6IjY1ZTZhZmQzMWRiNjVkMDE4NzkzNTVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oiAGex8ZfI3aQjQnEXx2rPdIsk4IjUBwYe6j8RbBWMo
  // api_url_1 = https://api.themoviedb.org/3/movie/157336?api_key=62814f52088e4a0611a869728c765de5
  // api_url_2 = https://api.themoviedb.org/3/movie/157336/videos?api_key=62814f52088e4a0611a869728c765de5

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />

      {/* Netflix Originals Row */}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      {/*  Trending Now Row*/}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* Top Rated Row */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* Action Movies Row */}
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      {/* Comedy Movies Row */}
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      {/* Horror Movies Row */}
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/* Romance Movies Row */}
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* Documentaries Row */}
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
