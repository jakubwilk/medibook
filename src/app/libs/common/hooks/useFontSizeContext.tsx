import { useContext } from 'react'

import { FontSizeContext } from '../context'
import { IFontSizeContext } from '../models'

const useFontSizeContext = () => {
  const { currentSize, setCurrentSize } = useContext<IFontSizeContext>(FontSizeContext)

  return { currentSize, setCurrentSize }
}

export default useFontSizeContext
