import * as types from "./types";
import axios from "axios";

// Movie route
let url = `https://outrageous-hoodie-jay.cyclic.app`;

//Get movie
export const getMovie =
  (page = 1, limit = 10, sort = "", keyword = "") =>
  async (dispatch) => {
    let link = `${url}/movie?page=${page}&limit=${limit}`;
    if (sort) {
      link = `${link}&sort=${sort}`;
    }
    if (keyword) {
      link = `${link}&keyword=${keyword}`;
    }
    console.log(link);
    try {
      const data = await axios.get(`${link}`);
      dispatch({ type: types.GET_MOVIES_SUCCESS, payload: data.data.movies });
    } catch (error) {
      console.log(error);
    }
  };

//Add movie
export const postMovie = (FormData) => async (dispatch) => {
  try {
    const data = await axios.post(`${url}/movie`, FormData);
    console.log(data.data);
    dispatch({ type: types.ADD_MOVIES_SUCCESS, payload: data.data.movie });
  } catch (error) {
    console.log(error);
  }
};

//delete movie
export const deleteMovie = (id) => async (dispatch) => {
  try {
    await axios.delete(`${url}/movie/delete?id=${id}`);
    dispatch({ type: types.DELETE_MOVIES_SUCCESS, payload: id });
  } catch (error) {
    console.log(error);
  }
};

//get single movie
export const singleMovie = (id) => async (dispatch) => {
  try {
    let data = await axios.get(`${url}/movie/single?id=${id}`);
    if (data.data.message === "success") {
      dispatch({
        type: types.GET_SINGLE_MOVIES_SUCCESS,
        payload: { movie: data.data.movieItem, error: false },
      });
    } else if (data.data.message === "error") {
      dispatch({
        type: types.GET_SINGLE_MOVIES_SUCCESS,
        payload: { movie: null, error: true },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//edit movie
export const editMovie = (id, movieData) => async (dispatch) => {
  try {
    let data = await axios.put(`${url}/movie/update`, {
      id,
      data: movieData,
    });
    console.log(data.data);
    dispatch({
      type: types.EDIT_MOVIES_SUCCESS,
      payload: { movie: data.data.movie, id },
    });
  } catch (error) {
    console.log(error);
  }
};
