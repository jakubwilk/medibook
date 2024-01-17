import { useContext } from 'react'

import { SnackbarContext } from '../context'
import { ISnackbarContextType } from '../models'

const useSnackbarContext = () => {
  const {
    isOpen,
    snackbarType,
    snackbarContent,
    handleOpenSnackbar,
    handleCloseSnackbar,
  } = useContext<ISnackbarContextType>(SnackbarContext)

  return {
    isOpen,
    snackbarType,
    snackbarContent,
    handleOpenSnackbar,
    handleCloseSnackbar,
  }
}

export default useSnackbarContext
