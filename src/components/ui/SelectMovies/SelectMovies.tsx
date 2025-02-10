import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { FC } from "react"
import { SelectMoviesProps } from "./interfaces"
import { useDispatch } from "react-redux"
import { resetQuery, selectQuery } from "../../../features/currentQuerySlice"


export const SelectMovies: FC<SelectMoviesProps> = ({countriesList, genresList, countries, order, year, genre}) => {

  const dispatch = useDispatch()

  const ordersList = [
    { title: 'По рейтингу', value: 'RATING'},
    { title: 'По оценкам', value: 'NUM_VOTE'}
  ]

  const yearsList = new Array(50).fill(null).map((_, index) => ({
    title: new Date().getFullYear() - index,
    value: new Date().getFullYear() - index,
  }))

  return (
    <Stack
        mt={'10px'}
        mb={'10px'} 
        sx={{flexDirection: {sm: 'column', md: 'row'}, 
        gap: 1
    }}>
      <FormControl fullWidth size="small">
        <InputLabel>Сортировка</InputLabel>
        <Select 
          label="Orders" 
          value={order} 
          onChange={(e) => dispatch(selectQuery({order: e.target.value}))}
        >
          {ordersList.map(order => (
            <MenuItem key={order.value} value={order.value}>{order.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Страна</InputLabel>
        <Select 
          label="Countries"
          value={countries} 
          onChange={(e) => dispatch(selectQuery({countries: e.target.value}))}  
        >
          {countriesList.map(country => (
            <MenuItem key={country.id} value={country.id}>{country.country}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Жанр</InputLabel>
        <Select 
          label="Genres"
          value={genre} 
          onChange={(e) => dispatch(selectQuery({genre: e.target.value}))}
        >
          {genresList.map(genre => (
            <MenuItem key={genre.id} value={genre.id}>{genre.genre}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Год</InputLabel>
        <Select 
          label="Years"
          value={year} 
          onChange={(e) => dispatch(selectQuery({year: e.target.value}))}
        >
          {yearsList.map((year) => (
            <MenuItem key={year.value} value={year.value}>{year.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button variant="outlined" startIcon={<CloseIcon/>} onClick={() => dispatch(resetQuery())}>Сбросить</Button>
      </Box>
    </Stack>
  )
}
