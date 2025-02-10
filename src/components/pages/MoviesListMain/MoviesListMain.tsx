import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import MoviesList from '../../ui/MoviesList/MoviesList'
import { ArrowBack } from '@mui/icons-material'
import { MOVIE_LISTS } from '../../../constants'
import { useGetFilmsQuery, useGetGenresAndCountriesQuery } from '../../../services/kinopoiskApi'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import { ErrorMessage } from '../../ui/ErrorMessage/ErrorMessage'
import { MovieListSkeleton } from '../../ui/MovieListSkeleton/MovieListSkeleton'
import { SelectMovies } from '../../ui/SelectMovies/SelectMovies'

export const MoviesListMain: FC = () => {
  const [page, setPage] = useState<number>(1)
  const {countries, order, year, genre} = useSelector((state: RootState)=> state.currentQuerySlice)
  const location = useLocation()
  const navigate = useNavigate()

  const movieType = MOVIE_LISTS.find(el => el.url === location.pathname)
  const myGenreId = movieType?.url === '/cartoons' ? '18' : genre

  const responseFilms = useGetFilmsQuery({
    type: movieType?.value ? movieType.value : '',
    countries,
    order,
    year,
    genre: myGenreId,
    page
  })

  const responseGenresAndCountries = useGetGenresAndCountriesQuery();

  useEffect(() => {
    setPage(1)
  }, [location])

  if (responseFilms.error || responseGenresAndCountries.error) return <ErrorMessage/>
  if (responseFilms.isLoading || responseGenresAndCountries.isLoading) return <MovieListSkeleton/>

  if (responseFilms.data && responseGenresAndCountries.data) return (
    <>
      <Stack 
        flexDirection='row' 
        sx={{mt: 2, mb: 2}}
      >
        <Button 
          startIcon={<ArrowBack/>} 
          onClick={() => navigate(-1)}
        />
        <Typography
          variant='h4'
        >
          {movieType?.title}
        </Typography>
      </Stack>
      <SelectMovies 
        countriesList={responseGenresAndCountries.data.countries}
        genresList={responseGenresAndCountries.data.genres}
        countries={countries}
        order={order}
        year={year}
        genre={genre}
      />
      <MoviesList 
        movies={responseFilms.data.items} 
        totalPages={responseFilms.data.totalPages} 
        page={page} 
        setPage={setPage}
      />
    </>
  )
}

