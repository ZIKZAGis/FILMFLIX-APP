import { FC } from 'react'
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom'
import { useGetStaffByIdQuery } from '../../../services/kinopoiskApi'
import { Box, Button, CircularProgress, Link, Stack, Typography } from '@mui/material'
import { ErrorMessage } from '../../ui/ErrorMessage/ErrorMessage'
import {Grid2 as Grid} from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { InfoBlock } from '../../ui/InfoBlock/InfoBlock'

export const ActorDetail: FC = () => {
  const {id} = useParams()
  const staffId = Number(id)
  const navigate = useNavigate()
  const {data, isLoading, error} = useGetStaffByIdQuery(staffId)

  if (isLoading) {
    return <Box display='flex' justifyContent='center' alignItems='center' margin='auto'>
      <CircularProgress size='8rem'/>
    </Box>
  }

  if (error) return <ErrorMessage/>

  return (
    <>
      <Grid container spacing={4} pt={1}>
        <Grid size={{xs: 12, md: 4}}>
          <img src={data?.posterUrl} style={{width: '100%'}} alt={data?.nameRu}/>
        </Grid>
        <Grid size={{xs: 12, md: 8}}>
          <Stack flexDirection='row'>
            <Button startIcon={<ArrowBack/>} onClick={() => navigate(-1)} color='primary'></Button>
            <Stack flexDirection='column'>
              {data?.nameRu ? <Typography variant='h5'>{data?.nameRu}</Typography> : ''}
              {data?.nameEn ? <Typography>{data?.nameEn}</Typography> : ''}
              {data?.nameEn && !data?.nameRu ? <Typography variant='h5'>{data?.nameEn}</Typography> : ''}
            </Stack>
          </Stack>
          <Typography gutterBottom variant='h5'>Об актёре</Typography>

          <Grid container>
            <InfoBlock size={6} name='Карьера' data={data?.profession ? data.profession : '-'}/>
            {data?.growth !== undefined && data.growth > 0 &&
              <InfoBlock size={6} name='Рост' data={`${data.growth} см`}/>
            }
            {data?.birthday !== undefined && data.birthday !== null &&
              <InfoBlock size={6} name='Дата рождения' data={`${data?.birthday} (${data?.age} лет)`}/>
            }
            <InfoBlock size={6} name='Всего фильмов' data={data?.films.length}/>

            {data?.facts !== undefined && data.facts.length > 0 &&
              <InfoBlock size={12} name='Факты' data={
                data?.facts.map((fact, index) => (
                  <Typography gutterBottom key={fact}>
                    {index + 1}.{fact}
                  </Typography>
              ))}/>
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid size={{xs: 12}}>
          <Typography variant='h5'>Фильмы</Typography>
        </Grid>
        <Stack>
          {data?.films.filter((item, index, self) => index === self.findIndex(el => el.filmId === item.filmId)).map((film, index) => (
            <Stack key={film.filmId} flexDirection='row' justifyContent='space-between'>            
              <Typography>{index + 1}</Typography>
              <Link component={RouterLink} to={`/movie/${film.filmId}`}>{film.nameRu ? film.nameRu : film.nameEn}</Link>
              <Typography>{film.rating ? film.rating : '-'}</Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </>
  )
}
