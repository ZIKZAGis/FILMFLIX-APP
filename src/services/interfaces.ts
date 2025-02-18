import { Movie } from '../types/types';

export interface MovieResponse {
    items: Movie[],
    total: number,
    totalPages: number
}

export interface SequelsAndPrequelsResponse extends Movie {
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

interface Film extends Movie {
    filmId: number,
    rating: string
}

export interface StaffActorResponse {
    age: number,
    birthday: null | string,
    birthplace: string,
    films: Film[],
    facts: string[],
    growth: number,
    hasAwards: number
    nameEn: string,
    nameRu: string,
    personId: number,
    posterUrl: string
    profession: string,
    sex: string,
    webUrl: string
}