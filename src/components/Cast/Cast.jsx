import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "services/moviesApi";
export const Cast = () => {

  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId)
  useEffect(() => {
    if (!movieId) return;
    getCastById(movieId).then(cast => {
      setCast(cast);
    });
  }, [movieId]);
  if (!cast) {
    return;
  }
  return (
  <>
      <ul>
        {cast.map(({ id, profile_path, original_name, character }) => {
          return (
            <li key={id}>
              <div >
                <img
                  src={profile_path}
                  alt={original_name}                  
                />
              </div>
              <div >
                <p >{original_name}</p>
                <p >{character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
