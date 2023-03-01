import { configureStore } from "@reduxjs/toolkit";
import usersReduser from "../features/usersSlice"
import newsReducer from "../features/newsSlice"
import categoriesReducer from "../features/categoriesSlice"


export const store = configureStore({
    reducer: {
        usersReduser,
        newsReducer,
        categoriesReducer,
    },
})