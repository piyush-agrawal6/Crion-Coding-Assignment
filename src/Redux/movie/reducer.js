import * as types from "./types";
const initialState = {
  movies: [],
  singleMovie: {},
  error: false,
};
export function movieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_MOVIES_SUCCESS: {
      return { ...state, movies: payload };
    }
    case types.GET_SINGLE_MOVIES_SUCCESS: {
      return { ...state, singleMovie: payload.movie, error: payload.error };
    }
    case types.ADD_MOVIES_SUCCESS: {
      return { ...state, movies: [...state.movies, payload] };
    }
    case types.EDIT_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [
          ...state.movies.map((elem) => {
            if (elem._id === payload.id) {
              return payload.movie;
            }
            return elem;
          }),
        ],
      };
    case types.DELETE_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: [
          ...state.movies.filter((elem) => {
            return elem._id !== payload;
          }),
        ],
      };
    }
    default:
      return state;
  }
}
