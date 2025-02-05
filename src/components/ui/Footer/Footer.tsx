import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <Stack 
      component="footer" 
      sx={{
        paddingTop: 4, 
        paddingBottom: 4,
        flexDirection: {sm: 'row'},
        justifyContent: {sm: 'space-between'},
        alignItems: {sm: 'center'},
        marginTop: 'auto'
      }}
    >
      <Typography variant='body2' color='text.secondary'>
        &copy; {new Date().getFullYear()} &laquo;FilmFlix&raquo; 18+
      </Typography>
      <Typography variant='h4' color='primary.main'>
        FilmFlix
      </Typography>
    </Stack>
  )
}
