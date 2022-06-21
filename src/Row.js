import React, { useEffect, useState } from 'react';
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title,fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
      fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390";
    width: "100";
    playerVars:{
      autoplay: 1,
    },
  };

  return (
    <div className="row">
        <h2>{title}</h2>

        <div className='row__posters'>
          {/* several row_poster(s) */}

          {movies.map((movies)=>(
            <img
            key={movies.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
            src={`${base_url}${isLargeRow ? movies.poster_path: movies.backdrop_path}`} alt={movies.name}/>
          ))}
        </div>
        <YouTube videoId={trailerUrl} opts={opts} />
    </div>
  )
}

export default Row