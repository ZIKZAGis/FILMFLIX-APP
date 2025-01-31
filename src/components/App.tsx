import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './ui/Layout'
import { Movies } from './pages/Movies/Movies'
import { MovieDetail } from './pages/MovieDetail/MovieDetail'
import { ActorDetail } from './pages/ActorDetail/ActorDetail'
import { MOVIE_LISTS, TOP_LISTS } from '../constants'
import { MoviesListTop } from './pages/MoviesListTop/MoviesListTop'
import { MoviesListMain } from './pages/MoviesListMain/MoviesListMain'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Movies/>
        },
        ...TOP_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListTop/>
        })),
        ...MOVIE_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListMain/>
        })),
        {
          path: '/movie/:id',
          element: <MovieDetail/>
        },
        {
          path: '/actor/:id',
          element: <ActorDetail/>
        },
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App;
