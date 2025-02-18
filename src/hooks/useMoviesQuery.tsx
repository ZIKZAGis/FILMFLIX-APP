import { useSelector } from "react-redux"
import { TOP_LISTS } from "../constants"
import { useGetFilmsQuery, useGetFilmsTopQuery } from "../services/kinopoiskApi"
import { RootState } from "../app/store";

export const useMoviesQuery = () => {
    const {countries, order, year, page} = useSelector((state: RootState) => state.currentQuerySlice);

    const responsePopular = useGetFilmsTopQuery({
        type: TOP_LISTS[0].value,
        page
    });

    const responseBest = useGetFilmsTopQuery({
        type: TOP_LISTS[1].value,
        page
    });

    const responseFilms = useGetFilmsQuery({
        type: 'FILM',
        countries,
        genre: '1', 
        order, 
        year, 
        page,
        keyword: ''
    });

    const responseSerials = useGetFilmsQuery({
        type: 'TV_SERIES',
        countries, 
        genre: '1', 
        order, 
        year, 
        page,
        keyword: ''
    });

    const responseCartoons = useGetFilmsQuery({
        type: 'FILM',
        countries, 
        genre: '18', 
        order, 
        year,
        page,
        keyword: ''
    });

    const isLoading = 
        responsePopular.isFetching || 
        responseBest.isFetching || 
        responseFilms.isFetching || 
        responseSerials.isFetching || 
        responseCartoons.isFetching;

    const hasError =
        responsePopular.error || 
        responseBest.error || 
        responseFilms.error || 
        responseSerials.error || 
        responseCartoons.error;

    return {
        isLoading,
        hasError,
        responsePopular,
        responseBest,
        responseCartoons,
        responseFilms,
        responseSerials
    }
}
