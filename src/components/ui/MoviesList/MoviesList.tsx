import { FC } from "react"
import { Stack } from "@mui/material"
import { MovieCard } from "../MovieCard/MovieCard"
import { MoviesListProps } from "./interfaces"

const MoviesList: FC<MoviesListProps> = ({movies, totalPages, page, setPage}) => {
    
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