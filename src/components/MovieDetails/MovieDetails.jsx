import { useState, useEffect, Suspense, lazy } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom";
import { getMovieById } from "services/moviesApi";

import css from './MovieDetails.module.css'

import { Loader } from "components/Loader/Loader";

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

function MovieDetails()  {
    const { movieId }  = useParams();
    console.log(movieId);

    const [movie, setMovie ] = useState(null);

    useEffect(() => {getMovieById(movieId).then((data) => {setMovie(data)})}, [movieId])
    if (!movie) { return } 
    const {
    poster_path,
    title,
    vote_average,
    overview,
    release_date,
    genres
    } = movie;
  // var year = { release_date }.getFullYear();
    return (
      <div className={css.details_wrapper}>
        <div>
          <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title} className={css.details_img } />
        </div>
        <div className={css.details}>

        <h1>{title} ({release_date.slice(0, 4)})</h1>
        <p>User Score: { vote_average}</p>

        <h2>Overview</h2>
        <p>{overview}</p>
        
        <h2>Genres</h2>
          <ul className={css.details_genre}>{genres.map(({ id, name }) => {
            return (
              <li key={id} className={css.details_genre_li}>
                {name}
             </li> 
            )
          })}
          </ul>

        </div>
         
          <div className={css.additional_wrap}>
            <h2>Additional information</h2>
          <Link to="reviews" className={css.info_link}>Reviews</Link><br/>
          <Link to="cast" className={css.info_link}>Cast</Link>
          <Suspense fallback={<Loader/>}>
          <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Routes>
          </Suspense>
        </div>
        </div>
    )
}

export default MovieDetails;


