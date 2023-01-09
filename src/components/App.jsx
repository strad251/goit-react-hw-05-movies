import { Route, Routes } from "react-router-dom";

import { Header } from "./Header/Header";
import { TrendingMovies } from "pages/Home/TrendingMovies";
import { SearchMovies } from "./SearchMovies/SearchMovies";
import { MovieDetails } from "pages/Movies/Movies";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "./Reviews/Reviews";



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<TrendingMovies />} />
        <Route path="movies" element={<SearchMovies />}/>
        <Route path="movies/:movieId" element={<MovieDetails />}>
           <Route path="cast" element={<Cast />} />
           <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
