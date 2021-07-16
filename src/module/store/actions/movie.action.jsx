import { GET_MOVIE_LIST } from './movie.constants';
import { axiosGetMovieList } from './../../../APIs/movie.api';

export const getMovieListAction = () => {
  return (dispatch) => {
    axiosGetMovieList()
      .then((response) => {
        dispatch({
          type: GET_MOVIE_LIST,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
