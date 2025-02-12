import { Movie } from '../types/types';

export interface MovieResponse {
    items: Movie[],
    total: number,
    totalPages: number
}

export interface SequelsAndPrequelsResponse {
    filmId: number,
    nameRu: string,
    nameEn: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    relationType: string,
}

export interface StaffResponse {
    staffId: number,
    nameRu: string,
    nameEn: string,
    description: string,
    posterUrl: string,
    professionText: string,
    professionKey: string,
}