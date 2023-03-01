import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
};

export const fetchCategories = createAsyncThunk(
  "fetch/categories",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/category");
      const categories = await res.json();
      return categories;
    } catch (error) {
        console.log(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
    });
  },
});

export default categoriesSlice.reducer;