import React, { useState } from 'react'
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi'
import { TOP_LISTS } from '../../../constants'
import { useLocation } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import MoviesList from '../../ui/MoviesList/MoviesList'

export const MoviesListTop = () => {
  const [page, setPage] = useState(1)
  const location = useLocation()

  const movieType = TOP_LISTS.find(el => el.url === location.pathname)

  const {data, error, isLoading} = useGetFilmsTopQuery({
    type: movieType?.value ? movieType.value : '',
    page,
  });

  if (error) return <p>Какая-то ошибка</p>
  if (isLoading) return <p>Загрузка...</p>

  if (data) return (
    <>
      <Stack flexDirection='row'>
        <Button>Назад</Button>
        <Typography>{movieType?.title}</Typography>
      </Stack>
      <MoviesList movies={data.items} totalPages={data.totalPages} page={page} setPage={setPage}>

      </MoviesList>
    </>
  )
}
