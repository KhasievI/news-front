import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  signingUp: false,
  signingIn: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: login, password }),
      });
      const json = await res.json();
      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      return json.message
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

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
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      console.log(token);
      localStorage.setItem("token", token);
      return token;
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
    builder.addCase(authSignUp.pending, (state) => {
      state.signingUp = true;
    });
    builder.addCase(authSignUp.rejected, (state, action) => {
      state.signingUp = false;
      state.error = action.payload;
    });
    builder.addCase(authSignUp.fulfilled, (state, action) => {
      state.signingUp = false;
      state.error = null;
    });
    builder.addCase(authSignIn.pending, (state) => {
      state.signingUp = true;
    });
    builder.addCase(authSignIn.rejected, (state, action) => {
      state.signingUp = false;
      state.error = action.payload;
    });
    builder.addCase(authSignIn.fulfilled, (state, action) => {
      state.signingUp = false;
      state.error = null;
      state.token = action.payload;
    });
  },
});

export default applicationSlice.reducer;
