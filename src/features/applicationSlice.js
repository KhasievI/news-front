import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginedUser: null,
  users: [],
  regMessage: null,
  logMessage: null,
  signingUp: false,
  signingIn: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ name, lastname, login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastname, username: login, password }),
      });
      const json = await res.json();
      return json.message;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username: login, password }),
      });
      const json = await res.json();
      if(json.message){
        return thunkAPI.rejectWithValue(json);
      }
      if(json.token){
        console.log('token');
        localStorage.setItem('token', json.token)
        return json
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const authExit = createAsyncThunk(
  "auth/exit",
  async (data, thunkAPI) => {
    try {
      localStorage.removeItem('token');
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "fetch/users",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/auth/users");
      const users = await res.json();
      return users;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authSignUp.fulfilled, (state, action) => {
      state.regMessage = action.payload;
    });
    builder.addCase(authSignIn.rejected, (state, action) => {
      state.logMessage = action.payload.message
    });
    builder.addCase(authSignIn.fulfilled, (state, action) => {
      state.logMessage = null;
      state.token = action.payload.token;
      state.loginedUser = parseJwt(state.token);
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loginedUser = parseJwt(state.token);
    });
    builder.addCase(authExit.fulfilled, (state) => {
      state.token = null;
      state.loginedUser = null;
    });
  },
});

export default applicationSlice.reducer;
