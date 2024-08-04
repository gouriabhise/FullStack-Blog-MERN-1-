import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

 export const blogsApi=createApi({
    reducerPath:'blogsApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000/api/',
     }),
    endpoints:(builder)=>({
        fetchBlogs:builder.query({
            query:({search='',category='',location=''})=>`/blogs?search=${search}&category=${category}&location=${location}`
        }),
        fetchBlogById:builder.query({
            query:(id)=>`/blogs/${id}`
        })
    })

})


 export const {useFetchBlogsQuery,useFetchBlogByIdQuery}=blogsApi