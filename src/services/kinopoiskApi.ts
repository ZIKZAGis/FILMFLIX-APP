import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieResponse } from './interfaces';
import { Country, Genre } from '../types/types';


const kinopoiskApiKey = import.meta.env.VITE_KINOPOISK_KEY

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
        getFilms: builder.query<MovieResponse, {countries: Country[], genre: Genre[] | string, order: string, type: string, year: number, page: number}>({
            query: ({
                countries,
                genre,
                order = 'NUM_VOTE',
                type = 'FILM',
                year,
                page
            }) => `/v2.2/films?countries=${countries}&genres=${genre}&order=${order}&type=${type}&year=${year}&page=${page}`,
        }),
    }),
})

export const { useGetFilmsTopQuery, useGetFilmsQuery } = kinopoiskApi