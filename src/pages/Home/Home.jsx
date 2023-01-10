import { Loader } from "components/Loader/Loader";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom"

const TrendingMovies = lazy(() => import('components/TrendingMovies/TrendingMovies'));

function Home() {
  return (
      <Suspense fallback={<Loader/>}>
        <Routes>
        <Route path="/" element={<TrendingMovies />} />
      </Routes>
      </Suspense>
  )
}

export default Home;