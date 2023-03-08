import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/newsSlice"
import applicationReducer from "../features/applicationSlice"
import categoriesReducer from "../features/categoriesSlice"
import commentsReducer from "../features/commentsSlice"


export const store = configureStore({
    reducer: {
        newsReducer,
        categoriesReducer,
        applicationReducer,
        commentsReducer,
    },
})