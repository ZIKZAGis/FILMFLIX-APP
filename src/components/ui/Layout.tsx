import React from 'react'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'

export const Layout = () => {
  return (
    <Container fixed>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </Container>
  )
}
