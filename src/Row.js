import React, { useEffect, useState } from 'react';
import axios from "axios";

function Row({ title,fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
    }
  }, []);

  return (
    <div>
        <h2>{title}</h2>

        {/* cointainer -> poster */}
    </div>
  )
}

export default Row