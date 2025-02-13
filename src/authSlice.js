import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

// Login API Call
export const loginUser = async (email, password, dispatch) => {
  try {
    const response = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
      email,
      password,
    });
    dispatch(loginSuccess(response.data));
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

// Register API Call
export const registerUser = async (firstname, lastname, email, password) => {
  try {
    const response = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", {
      firstname,
      lastname,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    return null;
  }
};
