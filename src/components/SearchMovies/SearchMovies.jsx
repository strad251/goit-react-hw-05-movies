import { useEffect, useState } from 'react';

import { getMovieByQuery } from 'services/moviesApi';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchFrom/SearchForm';

export const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;
    getMovieByQuery(query).then(({ results }) => {
      setMovies(results);
    });
  }, [query]);

  const onFormSubmit = query => {
    setQuery(query);
  };
  return (
    <>
      <SearchForm onFormSubmit={onFormSubmit} btnText="Search" />
      <MoviesList movies={movies} />
    </>
  );
};
