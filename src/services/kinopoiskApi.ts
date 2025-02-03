import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie } from '../types/types';

const kinopoiskApiKey = import.meta.env.VITE_KINOPOISK_KEY

interface MovieResponse {
    items: Movie[],
    total: number,
    totalPages: number
}

export const kinopoiskApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://kinopoiskapiunofficial.tech/api',
        prepareHeaders: (headers) => {
            headers.set('X-API-KEY', kinopoiskApiKey);
            headers.set('Content-Type', 'application/json')
        }
     }),
    endpoints: (builder) => ({
        getFilmsTop: builder.query<MovieResponse, {type: string, page: number}>({
        query: ({type, page}) => `/v2.2/films/collections?type=${type}&page=${page}`,
        }),
    }),
})

export const { useGetFilmsTopQuery } = kinopoiskApi