import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useGetFilmsQuery } from "../../../services/kinopoiskApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setSearchQuery } from "../../../features/searchQuerySlice";
import { useNavigate } from "react-router-dom";

const Search: FC = () => {
    const [input, setInput] = useState<String>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {countries, genre, order, type, year, page, keyword} = useSelector((state: RootState) => state?.searchQuerySlice)

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            dispatch(setSearchQuery({keyword: input}))
        }, 500)

        return () => clearTimeout(setTimeoutId)
        
    }, [input])

    const {data, isFetching} = useGetFilmsQuery({
        countries, genre, order, type, year, page, keyword: keyword || ''
    });

    return (
        <Autocomplete 
            freeSolo
            sx={{
                width: 400, 
                backgroundColor: 'rgba(255,255,255, 0.2)', 
                '& .MuiOutlinedInput-root': {'& fieldset': {border: 'none'}}
            }}
            getOptionLabel={(option) => {
                if (typeof option === 'string') {
                    return option
                }
                return `${option.nameRu} (${option.year})`
            }}
            options={data ? data.items : []}
            onInputChange={(_, value) => {
                setInput(value)
            }}
            onChange={(_, value) => {
                if (typeof value === 'object' && value !== null) {
                    navigate(`/movie/${value?.kinopoiskId}`)
                }
            }}
            renderInput={params => 
                <TextField 
                    {...params}
                    label='Поиск'
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {isFetching ? (<CircularProgress size={20} color="inherit" />) : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }
            }}/>}
        />
    )
}

export default Search