import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const fetchComments = createAsyncThunk(
  "fetch/comments",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/comments");
      const comments = await res.json();
      return comments;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default commentsSlice.reducer;
