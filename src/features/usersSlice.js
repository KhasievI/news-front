import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk(
  "fetch/todos",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3015/todos");
      const todos = await res.json();
      return todos;
    } catch (error) {
        console.log(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        
    });
  },
});

export default usersSlice.reducer;
