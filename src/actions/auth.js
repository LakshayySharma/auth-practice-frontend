import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_USER,
  LOGIN_ERROR,
  LOGOUT_USER,
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:5000/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register user
export const register = (data) => async (dispatch) => {
  const body = JSON.stringify(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/user/signup",
      body,
      config
    );
    console.log(res);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const err = error.response.data.errors;
    console.log(err);
    err.forEach((error) => console.log(error));
    dispatch({
      type: REGISTER_FAILURE,
    });
  }
};
//login user
export const login = (data) => async (dispatch) => {
  const body = JSON.stringify(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/user/login",
      body,
      config
    );
    console.log(res);

    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const err = error.response.data;
    console.log(err);
    dispatch({
      type: LOGIN_ERROR,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
