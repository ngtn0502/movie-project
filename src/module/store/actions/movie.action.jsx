import { GET_MOVIE_LIST } from '../../utils/movie.constants';

export const getMovieListAction = (data) => {
  return {
    type: GET_MOVIE_LIST,
    payload: data,
  };
};
