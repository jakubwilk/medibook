import { createBrowserRouter } from 'react-router-dom'

import { Layout, ROUTES } from '../libs/common'
import { HomePage, LoginPage, VerifyPatientPage, VisitsPage } from '../pages'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.VERIFY,
        element: <VerifyPatientPage />,
      },
      {
        path: ROUTES.VISITS,
        element: <VisitsPage />,
      },
    ],
  },
])
