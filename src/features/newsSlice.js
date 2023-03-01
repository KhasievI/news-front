import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  loading: false,
};

export const fetchNews = createAsyncThunk(
  "fetch/news ",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/news");
      const news = await res.json();
      return thunkAPI.fulfillWithValue(news);
    } catch (error) {
        console.log(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload
    });
  },
});

export default newsSlice.reducer;
