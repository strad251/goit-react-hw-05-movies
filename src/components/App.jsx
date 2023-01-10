import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "Layout/Layout";
import { Loader } from "./Loader/Loader";


const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId/*" element={<MovieDetails />}/>
        <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
    </Layout>
  );  
};
