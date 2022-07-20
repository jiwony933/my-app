import React, { useEffect, useState } from "react";
import Movie from "./comp/Movies";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          {movies.map((mov) => (
            <Movie
              key={mov.id}
              medium_cover_image={mov.medium_cover_image}
              title={mov.title}
              summary={mov.summary}
              genres={mov.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
