import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "./features/Blogs/blogsApi";

export const store=configureStore({
    reducer:{
        [blogsApi.reducerPath]:blogsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(blogsApi.middleware)
})