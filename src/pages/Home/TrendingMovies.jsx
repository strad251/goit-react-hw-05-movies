import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';


export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
    <h1>Trending Today</h1>
      <MoviesList movies={movies} />
      </>
  );
};
