export interface ListItem {
    title: string,
    icon: string,
    url: string,
    value: string
}

export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
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
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string | null;
    logoUrl: string | null;
    description: string;
    ratingAgeLimits: string;
}