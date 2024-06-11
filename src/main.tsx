import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home, MovieDetails, Search } from './pages'
import { LoginProvider, MultiFiltersProvider } from './contexts'

const queryClient = new QueryClient()

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/search/:search',
    element: <Search />
  },
  {
    path: '/movie/:id',
    element: <MovieDetails /> 
  },
  {
    path: 'user',
    element: <h1>User</h1>
  }
])

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MultiFiltersProvider>
        <LoginProvider> 
          <RouterProvider router={router} />
        </LoginProvider>
      </MultiFiltersProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
