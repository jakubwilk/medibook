import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../libs/common'
import { HomePage, LoginPage, VerifyPatientPage } from '../pages'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
    ],
  },
])
