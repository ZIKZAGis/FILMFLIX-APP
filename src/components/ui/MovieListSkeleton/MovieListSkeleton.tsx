import { Skeleton, Stack } from "@mui/material"
import { FC } from "react"

export const MovieListSkeleton: FC = () => {
    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='center'>
            <Skeleton animation='wave' variant="text" height='80px' width='100%' sx={{mb: '20px'}}/>
            {Array(10).fill(null).map((_, index) => (
                <Stack key={index}>
                    <Skeleton animation='wave' variant="rectangular" height='322px' width='215px'/>
                    <Skeleton animation='wave' variant="text" width='80%' sx={{ml: 'auto', mr: 'auto'}}/>
                    <Skeleton animation='wave' variant="text" width='70%' sx={{ml: 'auto', mr: 'auto'}}/>
                </Stack>
            ))}
        </Stack>
    )
}