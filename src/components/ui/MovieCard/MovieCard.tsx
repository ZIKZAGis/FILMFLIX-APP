import { FC } from 'react'
import { Box, Link, Rating, Stack, Tooltip } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import styles from './MovieCard.module.scss'
import { MovieCardProps } from './interfaces'

export const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return (
    <>
        <Stack margin='5px'>
            <RouterLink to={`/movies/${movie.kinopoiskId}`}>
                <img 
                    src={movie.posterUrlPreview} 
                    alt={'обложка фильма'} 
                    className={styles.img}
                />
            </RouterLink>
            <Link
                component={RouterLink}
                to={`/movies/${movie.kinopoiskId}`}
                textAlign='center' 
                fontSize='14px'
                sx={{width:'200px'}}
            >
                {movie.nameRu ? movie.nameRu : movie.nameEn}
            </Link>
            {movie.ratingKinopoisk && (
                <Stack alignItems='center'>
                    <Tooltip title={`${movie.ratingKinopoisk / 2} / 5`}>
                        <Box>
                            <Rating 
                                name='read-only' 
                                value={movie.ratingKinopoisk / 2} 
                                readOnly 
                                precision={0.1}
                            />
                        </Box>
                    </Tooltip>
                </Stack>
            )}
        </Stack>
    </>
  )
}
