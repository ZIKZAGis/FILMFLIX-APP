import { FC } from 'react'
import { useMoviesQuery } from '../../../hooks/useMoviesQuery'
import { Movie } from '../../../types/types';
import { Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
//@ts-ignore
import BearCarousel, {BearSlideImage} from 'bear-react-carousel'

export const Movies: FC = () => {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseCartoons,
    responseFilms,
    responseSerials
  } = useMoviesQuery();

  if (isLoading) return <div>Loading...</div>

  if (hasError) return <div>Error</div>

  const serializeDataForCarousel = (data: Movie[]) => (
    data.map(row => (
      <RouterLink key={row.kinopoiskId} to={`/movie/${row.kinopoiskId}`}>
        <BearSlideImage  imageUrl={row.posterUrlPreview}/>
      </RouterLink>

    ))
  )

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data?.items || []),
    },
    {
      title: 'Лучшие фильмы',
      url: '/best',
      data: serializeDataForCarousel(responseBest.data?.items || []),
    },
    {
      title: 'Фильмы',
      url: '/films',
      data: serializeDataForCarousel(responseFilms.data?.items || []),
    },
    {
      title: 'Сериалы',
      url: '/serials',
      data: serializeDataForCarousel(responseSerials.data?.items || []),
    },
    {
      title: 'Мультфильмы',
      url: '/cartoons',
      data: serializeDataForCarousel(responseCartoons.data?.items || []),
    },
  ]

  return (
    <>
      {carouselArr.map(carousel => (
        <Stack key={carousel.title}>
          <Link sx={{mt: 2, mb: 2}} variant='h4' component={RouterLink} to={carousel.url}>
            {carousel.title}
          </Link>
          <BearCarousel 
            data={carousel.data} 
            slidesPerView={1} 
            slidesPerGroup={1}
            isEnableNavButton
            isEnableLoop
            isEnableAutoPlay
            autoPlayTime={5000}
            breakpoints={{
              768: {
                slidesPerView: 5,
              }
            }}
          />
        </Stack>
      ))}
    </>
  )
}
