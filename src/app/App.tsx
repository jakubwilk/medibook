import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { FontSizeProvider } from './libs/common'
import { UserContextProvider } from './libs/user'
import AppContainer from './AppContainer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <FontSizeProvider>
          <AppContainer />
        </FontSizeProvider>
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
