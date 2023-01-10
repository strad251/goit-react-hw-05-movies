import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { useState, useEffect } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom";
import { getMovieById } from "services/moviesApi";

export const MovieDetails = () => {
    const { movieId }  = useParams();
    console.log(movieId);

    const [movie, setMovie ] = useState(null);

    useEffect(() => {getMovieById(movieId).then((data) => {setMovie(data)})}, [movieId])
    if (!movie){ return } 
    return (
        <>
        <p>{movie.title}({movie.release_date})</p>
        <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title} />
        <p>User Score: { movie.vote_average}</p>

        <h2>Overview</h2>
        <p>{movie.overview}</p>
        
        <h2>Genres</h2>
        <p>{movie.genres.name}</p>

         
          <div>
            <p>Additional information</p>
          <Link to="reviews" >Reviews</Link><br/>
          <Link to="cast" >Cast</Link>
          
          <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Routes>
        </div>
        </>
    )
}


