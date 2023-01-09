import { Link } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  return (
  
    <ul>
      {movies.map(({title, name, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
          <h2>{title || name}</h2>
          </Link>
        </li>
      ))}
    </ul>
    
  );
};
