import { Box, Typography } from "@mui/material"
import { FC } from "react"

export const ErrorMessage: FC = () => {
    return (
      <Box display='flex' flexDirection='column' alignItems='center' margin='auto'>
        <Typography variant='h6'>
          Произошла ошибка
        </Typography>
      </Box>
    )
}