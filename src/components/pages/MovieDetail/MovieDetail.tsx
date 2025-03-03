import { FC } from 'react'
import { useGetFilmQuery, useGetSequelsAndPrequelsQuery, useGetStaffQuery } from '../../../services/kinopoiskApi'
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom'
import { Box, Button, ButtonGroup, CircularProgress, Link, Stack, Typography } from '@mui/material'
import { ErrorMessage } from '../../ui/ErrorMessage/ErrorMessage'
import Grid from '@mui/material/Grid2'
import { ArrowBack, Language, Movie as MovieIcon} from '@mui/icons-material'
import { MovieCard } from '../../ui/MovieCard/MovieCard'
import VideoPlayer from '../../ui/VideoPlayer/VideoPlayer'
import { InfoBlock } from '../../ui/InfoBlock/InfoBlock'

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
            <InfoBlock size={6} name='Год' data={responseFilm.data?.year}/>
            <InfoBlock size={6} name='Страна' data={
              responseFilm.data?.countries.map(({country}, index) => (
                <Typography key={index}>{country}</Typography>
              ))}
            />
            <InfoBlock size={6} name='Жанры' data={
              responseFilm.data?.genres.map(({genre}, index) => (
                <Typography key={index}>{genre}</Typography>
              ))}
            />
            <InfoBlock size={6} name='Режисёры' data={
              responseStaff.data
                ?.filter(el => el.professionText === 'Режиссеры')
                .map(({nameRu}) => (
                  <Typography gutterBottom key={nameRu}>{nameRu}</Typography>
                ))
              }
            />
            <InfoBlock size={6} name='Время' data={`${responseFilm.data?.filmLength} мин`}/>
            <InfoBlock size={12} name='Описание' data={responseFilm.data?.description ? responseFilm.data.description : 'Нет описания'}/>
          </Grid>
        </Grid>
        <Grid size={{xs:12, md:2}}>
          <Typography variant='h6'>В главных ролях</Typography>
          {responseStaff.data
            ?.filter(el => el.professionText === 'Актеры')
            .slice(0, 10)
            .map(({nameRu, staffId}) => (
              <div key={nameRu}>
                <Link component={RouterLink} to={`/actor/${staffId}`} gutterBottom>{nameRu}</Link>
              </div>
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
