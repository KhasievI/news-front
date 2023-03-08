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
export const addComment = createAsyncThunk(
  "add/comment",
  async ({ name, text, news }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().applicationReducer.token}`,
        },
        body: JSON.stringify({ name, text, news }),
      });
      const comment = await res.json();
      return await thunkAPI.fulfillWithValue(comment);
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const deleteComment = createAsyncThunk(
  "delete/comment",
  async ({ id }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/comment/${id}`, {
        method: "DELETE",
      });
      return await res.json();
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
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.comments = state.comments.filter((comment) => {
        return comment._id !== action.payload._id;
      });
    });
  },
});

export default commentsSlice.reducer;
