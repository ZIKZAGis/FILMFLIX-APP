import { Stack, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

interface Country {
    country: string;
}

interface Genre {
    genre: string;
}

interface Movie {
    kinopoiskId: number;
    imdbId: string | null;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk: number | null;
    ratingImdb: number | null;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string | null;
    logoUrl: string | null;
    description: string;
    ratingAgeLimits: string;
}

interface MovieProps {
    movies: Movie[], 
    totalPages: number, 
    page: number, 
    setPage: (page: number) => void,
}


const MoviesList = ({movies, totalPages, page, setPage}: MovieProps) => {

    console.log(totalPages, page, setPage)
    
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