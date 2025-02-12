import { FC } from 'react'
import { useGetFilmQuery, useGetSequelsAndPrequelsQuery, useGetStaffQuery } from '../../../services/kinopoiskApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { ErrorMessage } from '../../ui/ErrorMessage/ErrorMessage'
import Grid from '@mui/material/Grid2'
import { ArrowBack } from '@mui/icons-material'

export const MovieDetail: FC = () => {
  const {id} = useParams()
  const numberId = Number(id)
  const navigate = useNavigate()

  const responseFilm = useGetFilmQuery(numberId)
  const responseSequelAndPrequel = useGetSequelsAndPrequelsQuery(numberId)
  const responseStaff = useGetStaffQuery(numberId)

  if (responseFilm.isLoading || responseSequelAndPrequel.isLoading || responseStaff.isLoading) {
    return (
      <Box display='flex' justifyContent='center' margin='auto'>
        <CircularProgress size='8rem'/>
      </Box>
    )
  }

  if (responseFilm.error || responseStaff.error) {
    return (
      <ErrorMessage/>
    )
  }


  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <img src={responseFilm.data?.posterUrl} alt={responseFilm.data?.nameRu ? responseFilm.data?.nameRu : 'постер фильма'} width='100%'></img>
      </Grid>
      <Grid size={6}>
        <Grid container>
          <Grid size={2}>
            <Button startIcon={<ArrowBack/>} size='large' onClick={() => navigate(-1)}/>
          </Grid>
          <Grid size={4} alignContent='center'>
            <Typography variant='h5'>
              {responseFilm.data?.nameRu}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={6}>
            <Typography>
              Год
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography gutterBottom>
              {responseFilm.data?.year}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              Страна
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography gutterBottom>
              {responseFilm.data?.countries.map(({country}, index) => (
                <Typography key={index}>{country}</Typography>
              ))}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              Жанры
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography gutterBottom>
              {responseFilm.data?.genres.map(({genre}, index) => (
                <Typography key={index}>{genre}</Typography>
              ))}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>
              Режисёры
            </Typography>
          </Grid>
          <Grid size={6}>
            {responseStaff.data
              ?.filter(el => el.professionText === 'Режиссеры')
              .map(({nameRu}) => (
                <Typography gutterBottom key={nameRu}>{nameRu}</Typography>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid size={2}>
        Актёры
      </Grid>
    </Grid>
  )
}
