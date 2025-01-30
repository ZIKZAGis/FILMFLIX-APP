import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './ui/Layout'
import { Movies } from './pages/Movies/Movies'
import { MovieDetail } from './pages/MovieDetail/MovieDetail'
import { ActorDetail } from './pages/ActorDetail/ActorDetail'


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
