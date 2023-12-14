import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

import { FontSizeEnum, IFontSizeContext } from '../models'

interface IProps {
  children: ReactNode
}

export const FontSizeContext = createContext<IFontSizeContext>({
  currentSize: FontSizeEnum.DEFAULT,
  setCurrentSize: () => {},
})

export const FontSizeProvider = ({ children }: IProps) => {
  const [currentSize, setCurrentSize] = useState<FontSizeEnum>(FontSizeEnum.DEFAULT)

  const setCurrentFontSize = useCallback((size: FontSizeEnum) => {
    setCurrentSize(size)
  }, [])

  const values: IFontSizeContext = useMemo(
    () => ({
      currentSize,
      setCurrentSize: setCurrentFontSize,
    }),
    [currentSize, setCurrentFontSize],
  )

  return <FontSizeContext.Provider value={values}>{children}</FontSizeContext.Provider>
}
