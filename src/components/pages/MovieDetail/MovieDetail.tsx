import { FC } from 'react'
import { useGetFilmQuery, useGetSequelsAndPrequelsQuery, useGetStaffQuery } from '../../../services/kinopoiskApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, ButtonGroup, CircularProgress, Stack, Typography } from '@mui/material'
import { ErrorMessage } from '../../ui/ErrorMessage/ErrorMessage'
import Grid from '@mui/material/Grid2'
import { ArrowBack, Language, Movie as MovieIcon} from '@mui/icons-material'
import { MovieCard } from '../../ui/MovieCard/MovieCard'
import VideoPlayer from '../../ui/VideoPlayer/VideoPlayer'

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
    <>   
      <Grid container spacing={2} sx={{mt: {xs: 2,md: 4}}}>
        <Grid size={{xs:12, md:4}}>
          <img src={responseFilm.data?.posterUrl} alt={responseFilm.data?.nameRu ? responseFilm.data?.nameRu : 'постер фильма'} width='100%'></img>
        </Grid>
        <Grid size={{xs:12, md:6}}>
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
            <Grid size={6}>
              <Typography>
                Время
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>
                {responseFilm.data?.filmLength} мин
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography>
                Описание:
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography>
                {responseFilm.data?.description ? responseFilm.data.description : 'Нет описания'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{xs:12, md:2}}>
          <Typography variant='h6'>В главных ролях</Typography>
          {responseStaff.data
            ?.filter(el => el.professionText === 'Актеры')
            .slice(0, 10)
            .map(({nameRu}) => (
              <Typography gutterBottom key={nameRu}>{nameRu}</Typography>
            ))
          }
        </Grid>
      </Grid>
      <Grid 
        container 
        spacing={2}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Grid width='fit-content'>
          <ButtonGroup variant='outlined' size='small'>
            <Button target='_blank' href={`${responseFilm.data?.webUrl}`} endIcon={<Language/>}>Кинопоиск</Button>
            <Button target='_blank' href={`https://www.imdb.com/title/${responseFilm.data?.imdbId}`} endIcon={<MovieIcon/>}>IMDB</Button>
          </ButtonGroup>
        </Grid>
        <Typography variant='h5'>Смотреть онлайн</Typography>
        <VideoPlayer/>
        {responseSequelAndPrequel.data && (
          <Stack alignItems='center'>
            <Typography variant='h5' gutterBottom>Сиквелы и приквелы</Typography>
            <Stack direction='row' flexWrap='wrap' justifyContent='center'>
              {responseSequelAndPrequel.data?.map((el) => (
                <MovieCard key={el.filmId} movie={el} reload/>
              ))}
            </Stack>
          </Stack>
        )}
      </Grid>
    </>
  )
}
