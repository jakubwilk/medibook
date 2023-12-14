import React from 'react'

import { FontSizeProvider } from './libs/common'
import { UserContextProvider } from './libs/user'
import AppContainer from './AppContainer'

function App() {
  return (
    <UserContextProvider>
      <FontSizeProvider>
        <AppContainer />
      </FontSizeProvider>
    </UserContextProvider>
  )
}

export default App
