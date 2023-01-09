import { Route, Routes } from "react-router-dom";

import { Header } from "./Header/Header";
import { TrendingMovies } from "pages/Home/Home";
import { SearchMovies } from "./SearchMovies/SearchMovies";
import { MovieDetails } from "components/Movie/Movie";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "./Reviews/Reviews";



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<TrendingMovies />} />
        <Route path="/movies" element={<SearchMovies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
           <Route path="/movies/:movieId/cast" element={<Cast />} />
           <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );  
};
