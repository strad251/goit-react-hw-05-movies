import { Link } from "react-router-dom";

import css from './MoviesList.module.css'

export const MoviesList = ({ movies }) => {
  return (  
    <ul>
      {movies.map(({title, name, id }) => (
        <li key={id} className={css.movie_li}>
          <Link to={`/movies/${id}`} className={css.movie_link}>
          <h2>{title || name}</h2>
          </Link>
        </li>
      ))}
    </ul>  
  );
};
