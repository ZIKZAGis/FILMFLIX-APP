import { Skeleton, Stack, useMediaQuery } from "@mui/material"
import React, { FC } from "react"

export const MoviesListMainSkeleton: FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)')

    return (
        <>
            <Skeleton
                animation="wave"
                variant="rectangular"
                height="32px"
                width="200px"
                sx={{ mt: 2, mb: 2 }}
            />
            <Stack
                mt={2}
                mb={2} 
                sx={{flexDirection: {sm: 'column', md: 'row'}, 
                gap: 1
            }}>
                <Skeleton animation='wave' variant="rounded" height={'40px'} width={isMobile ? '100%' : '25%'}/>
                <Skeleton animation='wave' variant="rounded" height={'40px'} width={isMobile ? '100%' : '25%'}/>
                <Skeleton animation='wave' variant="rounded" height={'40px'} width={isMobile ? '100%' : '25%'}/>
                <Skeleton animation='wave' variant="rounded" height={'40px'} width={isMobile ? '100%' : '25%'}/>
                <Skeleton animation='wave' variant="rounded" height={'40px'} width={'132px'}/>
            </Stack>
            <Stack direction='row' flexWrap='wrap' justifyContent='center'>
                {Array(15).fill(null).map((_, index) => (
                    <React.Fragment key={index}>
                        <Stack key={index} flexDirection="column">
                            <Skeleton animation='wave' variant="rectangular" height='322px' width='215px'/>
                            <Skeleton animation='wave' variant="text" width='80%' sx={{ml: 'auto', mr: 'auto'}}/>
                            <Skeleton animation='wave' variant="text" width='70%' sx={{ml: 'auto', mr: 'auto'}}/>
                        </Stack>
                    </React.Fragment>
                ))}
            </Stack>
        </>
    )
}