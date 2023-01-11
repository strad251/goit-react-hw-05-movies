import { useEffect, useState } from "react";

import { getTrendingMovies } from "services/moviesApi";

import { MoviesList } from "components/MoviesList/MoviesList";

import css from './Home.module.css'


function Home() {
   const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
    <h1 className={css.title}>Trending Today</h1>
      <MoviesList movies={movies} />
      </>
  );
}

export default Home;

