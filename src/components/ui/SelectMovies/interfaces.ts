import { Country, Genre } from "../../../types/types"

export interface SelectMoviesProps {
    countriesList: Country[]
    genresList: Genre[]
    countries: Country[]
    order: string
    year: number | string
    genre: Genre[]
}