import { Movie } from "../../../types/types"

export interface MoviesListProps {
    movies: Movie[], 
    totalPages: number, 
    page: number, 
    setPage: (page: number) => void,
}