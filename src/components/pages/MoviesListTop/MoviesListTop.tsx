import { FC, useEffect, useState } from 'react'
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi'
import { TOP_LISTS } from '../../../constants'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import MoviesList from '../../ui/MoviesList/MoviesList'
import { ArrowBack } from '@mui/icons-material'

export const MoviesListTop: FC = () => {
  const [page, setPage] = useState<number>(1)
  const location = useLocation()
  const navigate = useNavigate()

  const movieType = TOP_LISTS.find(el => el.url === location.pathname)

  const {data, error, isLoading} = useGetFilmsTopQuery({
    type: movieType?.value ? movieType.value : '',
    page,
  });

  useEffect(() => {
    setPage(1)
  }, [location])

  if (error) return <p>Какая-то ошибка</p>
  if (isLoading) return <p>Загрузка...</p>

  if (data) return (
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
      <MoviesList 
        movies={data.items} 
        totalPages={data.totalPages} 
        page={page} 
        setPage={setPage}
      />
    </>
  )
}
