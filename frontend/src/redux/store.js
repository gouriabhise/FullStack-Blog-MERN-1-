import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "./features/Blogs/blogsApi";
import authApi from "./features/Auth/authApi";
import authReducer from './features/Auth/authSlice'
export const store=configureStore({
    reducer:{
        [blogsApi.reducerPath]:blogsApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
        auth:authReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(blogsApi.middleware,authApi.middleware)
})