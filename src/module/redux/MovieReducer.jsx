import { GET_MOVIE_LIST } from '../utils/movie.constants.jsx';

const init = {
  movieList: [],
};

// For get movie data, and manipulate with that data

export const MovieReducer = (state = init, action) => {
  //
  if (action.type === GET_MOVIE_LIST) {
    state.movieList = action.payload;
    return { ...state };
  }
  
  //
  return state;
};
