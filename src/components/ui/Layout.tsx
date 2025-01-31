import React from 'react'
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'

export const Layout = () => {
  return (
    <Container fixed>
      <Box sx={{p:4}}/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Container>
  )
}
