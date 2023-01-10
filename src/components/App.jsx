import { Route, Routes } from "react-router-dom";

import { Home } from "pages/Home/Home";
import { Layout } from "Layout/Layout";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "components/MovieDetails/MovieDetails";



export const App = () => {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies/:movieId/*" element={<MovieDetails />}/>
      <Route path="*" element={<Home />} />
    </Routes>
    </Layout>
  );  
};
