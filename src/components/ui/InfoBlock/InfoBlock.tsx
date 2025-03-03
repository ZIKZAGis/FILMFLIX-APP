import Grid from '@mui/material/Grid2'
import { Typography } from '@mui/material'

interface InfoBlockProps {
    size: number,
    name: string,
    data: any
}

export const InfoBlock = ({size, name, data}: InfoBlockProps) => {
  return (
    <>
        <Grid size={size}>
            <Typography>
                {name}
            </Typography>
        </Grid>
        <Grid size={size}>
            <Typography gutterBottom>
                {data}
            </Typography>
        </Grid>
    </>
  )
}
