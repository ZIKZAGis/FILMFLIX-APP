import React from "react"
import { Stack } from "@mui/material"
import { Movie } from "../../../types/types"
import { MovieCard } from "../MovieCard/MovieCard"

interface MoviesListProps {
    movies: Movie[], 
    totalPages: number, 
    page: number, 
    setPage: (page: number) => void,
}

const MoviesList = ({movies, totalPages, page, setPage}: MoviesListProps) => {
    console.log (page, setPage, totalPages)
    return (
        <>
            <Stack 
                direction='row' 
                justifyContent='center' 
                flexWrap='wrap'
            >
                {movies.map((movie) => (
                    <MovieCard 
                        key={movie.kinopoiskId} 
                        movie={movie}
                    />
                ))}
            </Stack>
        </>
    )
}

export default MoviesList