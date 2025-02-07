import { Movie } from '../types/types';

export interface MovieResponse {
    items: Movie[],
    total: number,
    totalPages: number
}