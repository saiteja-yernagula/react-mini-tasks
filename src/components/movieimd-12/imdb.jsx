import axios from 'axios';
import React, { useRef, useState } from 'react';
import './Imdb.css'; // optional, if extracting styles

function Imdb() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const inp = useRef();

  const fetchData = async (title) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=76d079f0`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData(inp.current.value);
  };

  return (
    <div className="imdb-container">
      <h1 className="title">🎬 Movie Info Finder</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" ref={inp} placeholder="Enter movie title..." />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Loading...</p>}

      {data && data.Response !== "False" && (
        <div className="card fade-in">
          <img src={data.Poster} alt={data.Title} />
          <div className="info">
            <h2>{data.Title} ({data.Year})</h2>
            <p><strong>Genre:</strong> {data.Genre}</p>
            <p><strong>Director:</strong> {data.Director}</p>
            <p><strong>Actors:</strong> {data.Actors}</p>
            <p><strong>Plot:</strong> {data.Plot}</p>
            <p><strong>Rating:</strong> {data.imdbRating} ⭐ ({data.imdbVotes} votes)</p>
            <p><strong>Box Office:</strong> {data.BoxOffice}</p>
            <p><strong>Awards:</strong> {data.Awards}</p>
            <p><strong>Language:</strong> {data.Language}</p>
          </div>
        </div>
      )}

      {data && data.Response === "False" && (
        <p className="error">❌ Movie not found</p>
      )}
    </div>
  );
}

export default Imdb;
