import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

import { ISnackbarContextType, SnackbarTypeEnum } from '../models'

interface IProps {
  children: ReactNode
}

export const SnackbarContext = createContext<ISnackbarContextType>({
  isOpen: false,
  snackbarType: null,
  snackbarContent: '',
  handleOpenSnackbar: () => {},
  handleCloseSnackbar: () => {},
})

export const SnackbarProvider = ({ children }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [snackbarType, setSnackbarType] = useState<SnackbarTypeEnum | null>(null)
  const [snackbarContent, setSnackbarContent] = useState<string>('')

  const handleOpenSnackbar = useCallback((type: SnackbarTypeEnum, content: string) => {
    setIsOpen(true)
    setSnackbarType(type)
    setSnackbarContent(content)
  }, [])

  const handleCloseSnackbar = useCallback(() => {
    setIsOpen(false)
    setSnackbarType(null)
    setSnackbarContent('')
  }, [])

  const values = useMemo(
    () => ({
      isOpen,
      snackbarType: snackbarType as SnackbarTypeEnum,
      snackbarContent,
      handleOpenSnackbar,
      handleCloseSnackbar,
    }),
    [isOpen, snackbarType, snackbarContent, handleOpenSnackbar, handleCloseSnackbar],
  )

  return <SnackbarContext.Provider value={values}>{children}</SnackbarContext.Provider>
}
