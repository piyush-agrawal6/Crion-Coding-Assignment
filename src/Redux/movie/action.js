import * as types from "./types";
import axios from "axios";

// Movie routes
let url = `https://outrageous-hoodie-jay.cyclic.app/`;

//Get movie
export const getMovie = () => async (dispatch) => {
  try {
    const data = await axios.get(`${url}/movie`);
    dispatch({ type: types.GET_MOVIES_SUCCESS, payload: data.data.movies });
  } catch (error) {
    console.log(error);
  }
};

//Add movie
export const postMovie = (FormData) => async (dispatch) => {
  try {
    const data = await axios.post(
      `https://outrageous-hoodie-jay.cyclic.app/task`,
      FormData
    );
    dispatch({ type: types.ADD_MOVIES_SUCCESS, payload: data.data.movie });
  } catch (error) {
    console.log(error);
  }
};

//delete sprint
export const deleteSprint = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://outrageous-hoodie-jay.cyclic.app/sprint/delete?id=${id}`
    );
    dispatch({ type: types.DELETE_MOVIES_SUCCESS, payload: id });
  } catch (error) {
    console.log(error);
  }
};

//edit task
export const editTask = (id, taskData) => async (dispatch) => {
  try {
    let data = await axios.put(
      `https://outrageous-hoodie-jay.cyclic.app/task/update?taskid=${id}`,
      taskData
    );
    console.log(data);
    dispatch({
      type: types.EDIT_MOVIES_SUCCESS,
      payload: { item: data.data.task, id },
    });
  } catch (error) {
    console.log(error);
  }
};
