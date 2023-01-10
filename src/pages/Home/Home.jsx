import { TrendingMovies } from "components/TrendingMovies/TrendingMovies"
import { Route, Routes } from "react-router-dom"


export const Home = () => {
  return (
        <Routes>
        <Route path="/" element={<TrendingMovies />} />
      </Routes>
  )
}