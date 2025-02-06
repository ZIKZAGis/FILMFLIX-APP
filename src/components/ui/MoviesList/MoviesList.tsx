import { FC } from "react"
import { Pagination, Stack } from "@mui/material"
import { MovieCard } from "../MovieCard/MovieCard"
import { MoviesListProps } from "./interfaces"

const MoviesList: FC<MoviesListProps> = ({movies, totalPages, page, setPage}) => {
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
            <Stack alignItems='center'>
                <Pagination 
                    count={totalPages} 
                    color="primary" 
                    variant="outlined" 
                    size="large"
                    page={page}
                    onChange={(_, value) => setPage(value)}
                />
            </Stack>
        </>
    )
}

export default MoviesList