export interface ListItem {
    title: string,
    icon: string,
    url: string,
    value: string
}

export interface Country {
    id?: number,
    country: string
}

export interface Genre {
    id?: number,
    genre: string
}

export interface Movie {
    kinopoiskId: number;
    imdbId: string | null;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk: number | null;
    ratingImdb: number | null;
    year: number | string;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string | null;
    logoUrl: string | null;
    description: string;
    ratingAgeLimits: string;
    kinopoiskHDId: string;
    reviewsCount: number;
    ratingGoodReview: number;
    ratingGoodReviewVoteCount: number;
    ratingKinopoiskVoteCount: number;
    ratingImdbVoteCount: number;
    ratingFilmCritics: number;
    ratingFilmCriticsVoteCount: number;
    ratingAwait: number;
    ratingAwaitCount: number;
    ratingRfCritics: number;
    ratingRfCriticsVoteCount: number;
    webUrl: string;
    filmLength: number;
    slogan: string;
    shortDescription: string;
    editorAnnotation: string;
    isTicketsAvailable: boolean;
    productionStatus: string;
    ratingMpaa: string;
    hasImax: boolean;
    has3D: boolean;
    lastSync: string;
    startYear: number;
    endYear: number;
    serial: boolean;
    shortFilm: boolean;
    completed: boolean;
}