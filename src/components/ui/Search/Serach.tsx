import { Autocomplete, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useGetFilmsQuery } from "../../../services/kinopoiskApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setSearchQuery } from "../../../features/searchQuerySlice";


const Search: FC = () => {
    const [input, setInput] = useState<String>('')
    const dispatch = useDispatch()
    const {countries, genre, order, type, year, page, keyword} = useSelector((state: RootState) => state?.searchQuerySlice)

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            dispatch(setSearchQuery({keyword: input}))
        }, 500)

        return () => clearTimeout(setTimeoutId)
        
    }, [input])

    const {data, isLoading} = useGetFilmsQuery({
        countries, genre, order, type, year, page, keyword
    });

    return (
        <Autocomplete 
            freeSolo
            sx={{width: 300}}
            options={data ? data.items.map(option => `${option.nameRu} (${option.year})`) : []}
            onInputChange={(_, value) => {
                setInput(value)
            }}
            renderInput={params => <TextField {...params} label='Найти фильм'/>}
        />
    )
}

export default Search