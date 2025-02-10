import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieResponse } from './interfaces';
import { Country, Genre, Movie } from '../types/types';


const kinopoiskApiKey = import.meta.env.VITE_KINOPOISK_KEY

const excludeGenres: string[] = [
    "",
    'новости',
    'церемония',
    'реальное ТВ',
    'ток-шоу'
]

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
        getFilms: builder.query<MovieResponse, {countries: Country[], genre: Genre[] | string, order: string, type: string, year: number | string, page: number}>({
            query: ({
                countries,
                genre,
                order = 'NUM_VOTE',
                type = 'FILM',
                year,
                page
            }) => `/v2.2/films?countries=${countries}&genres=${genre}&order=${order}&type=${type}&yearFrom=${year}&yearTo=${year}&page=${page}`,
        }),
        getGenresAndCountries: builder.query<Movie, void>({
            query: () => `/v2.2/films/filters`,
            transformResponse: (response: Movie) => ({
                ...response,
                genres: response.genres.filter(
                    ({genre}) => !excludeGenres.includes(genre)
                ),
            }),
        }),
    }),
})

export const { useGetFilmsTopQuery, useGetFilmsQuery, useGetGenresAndCountriesQuery } = kinopoiskApi