import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "services/moviesApi";

import css from './Cast.module.css'
function Cast () {

  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId)
  useEffect(() => {
    if (!movieId) return;
    getCastById(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);
  if (!cast) {
    return;
  }
  return (
  <>
      <ul className={css.cast_wrapper}>
        {cast.map(({ id, profile_path, original_name, character }) => {
          return (
            <li key={id}>
              <div >
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}  
                  className={css.cast_img}
                />
              </div>
              <div >
                <p className={css.cast_text}>{original_name}</p>
                <p className={css.cast_text}>{character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cast;
