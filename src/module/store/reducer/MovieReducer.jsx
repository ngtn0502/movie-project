import {
  GET_MOVIE_LIST,
  GET_MOVIE_DETAIL,
} from '../constants/movie.constants.jsx';

const init = {
  movieList: [],
  movieDetail: {},
};

// For get movie data, and manipulate with that data

export const MovieReducer = (state = init, action) => {
  //
  if (action.type === GET_MOVIE_LIST) {
    return { ...state, movieList: action.payload };
  }

  if (action.type === GET_MOVIE_DETAIL) {
    return { ...state, movieDetail: action.payload };
  }

  //
  return state;
};
