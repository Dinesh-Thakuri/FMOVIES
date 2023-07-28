import { createSlice } from "@reduxjs/toolkit";
import {
  clearToken,
  getToken,
  isLoggedIn,
  setToken,
} from "../../Utils/auth.util";

const initialState = {
  loginStatus: isLoggedIn(),
  token: getToken(),
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action", action);
      setToken(action.payload);
      state.loginStatus = true;
    },
    logout: (state) => {
      clearToken();
      state.loginStatus = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
