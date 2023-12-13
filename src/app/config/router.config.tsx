import { createBrowserRouter } from 'react-router-dom'

import { HomePage, LoginPage, VerifyPatientPage } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/verify',
    element: <VerifyPatientPage />,
  },
])
