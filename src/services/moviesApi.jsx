import axios from 'axios';

const instanceMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '54318b31afbeeb3ff096f10d88733b61',
  }
});

export const getTrendingMovies = async () => {
  const {
    data
  } = await instanceMovie.get('/trending/movie/day', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieByQuery = async query => {
  const {
    data
  } = await instanceMovie.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};


export const getMovieById = async movie_id => {
  const { data } = await instanceMovie.get(`/movie/${movie_id}`);    
  return data;
};

  export const getReviewsById = async movie_id => {
    const { data } = await instanceMovie.get(`/movie/${movie_id}/reviews`);    
    return data;
  };
  export const getCastById = async movie_id => {
    const { data } = await instanceMovie.get(`/movie/${movie_id}/credits`);    
    return data;
  };