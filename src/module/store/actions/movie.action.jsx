import { GET_MOVIE_LIST, GET_MOVIE_DETAIL } from '../constants/movie.constants.jsx';
import {
  axiosGetMovieDetail,
  axiosGetMovieList,
} from './../../../APIs/movie.api';

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

export const getMovieDetailAction = (id) => {
  return (dispatch) => {
    axiosGetMovieDetail(id)
      .then((response) => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
