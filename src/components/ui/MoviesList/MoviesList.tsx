import { Stack, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { Movie } from "../../../types/types"

interface MovieProps {
    movies: Movie[], 
    totalPages: number, 
    page: number, 
    setPage: (page: number) => void,
}

const MoviesList = ({movies, totalPages, page, setPage}: MovieProps) => {
    console.log (page, setPage, totalPages)
    return (
        <>
            <Stack>
                {movies.map((movie) => (
                    <Stack key={movie.kinopoiskId}>
                        <Link to={`/movies/${movie.kinopoiskId}`}>
                            <img src={movie.posterUrlPreview} alt={'обложка фильма'} />
                        </Link>
                        <Typography>{movie.nameRu ? movie.nameRu : movie.nameEn}</Typography>
                    </Stack>
                ))}
            </Stack>
        </>
    )
}

export default MoviesList