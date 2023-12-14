import React from 'react'

import { FontSizeProvider } from './libs/common'
import AppContainer from './AppContainer'

function App() {
  return (
    <FontSizeProvider>
      <AppContainer />
    </FontSizeProvider>
  )
}

export default App
