import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Login = createAsyncThunk(
  "login",
  async (object, { dispatch, getState }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(object);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://apiusermanagement-dev.azurewebsites.net/api/User/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        alert(JSON.stringify(result));
      });
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
    isLoading: false,
    ExpireTime: "",
    UserName: "",
    Email: "",
    isAuth: false,
  },

  reducers: {
    loginPending: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.Username = action.payload;
      state.Email = action.payload;
      state.isAuth = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
    },
    logout: (state, action) => {
      state.isAuth = false;
      state.token = "";
      state.Email = "";
      state.UserName = "";
      state.isLoading = false;
    },
  },
});

export const { loginPending, loginSuccess, loginFailure, logout } =
  loginSlice.actions;
export default loginSlice.reducer;
