import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { router, theme } from './config'

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default AppContainer
