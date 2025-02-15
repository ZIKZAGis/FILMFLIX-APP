interface Country {
    country: string
}
  
interface Genre {
    genre: string
}

export interface CurrentState {
    countries: Country[],
    genre: Genre[],
    order: string,
    type: string,
    year: number | string,
    page: number,
}

export interface SearchState extends CurrentState {
    keyword: string
}