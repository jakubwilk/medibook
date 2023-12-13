import { Outlet } from 'react-router-dom'

import { Footer, Navbar } from '../components'

const Layout = () => {
  return (
    <main className={'min-h-screen'}>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
