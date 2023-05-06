import * as types from "./types";
const initialState = {
  movies: [],
};
export function movieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_MOVIES_SUCCESS: {
      return { ...state, movies: payload };
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
