import { useTranslation } from 'react-i18next'
import { Alert, Snackbar } from '@mui/material'

import { AUTO_HIDE_SNACKBAR, SnackbarTypeEnum } from '../models'

interface IProps {
  content: string
  type: SnackbarTypeEnum
  isOpen: boolean
  handleClose: () => void
}

const AppSnackbar = ({ content, type, isOpen, handleClose }: IProps) => {
  const { t } = useTranslation()

  return (
    <Snackbar autoHideDuration={AUTO_HIDE_SNACKBAR} onClose={handleClose} open={isOpen}>
      <Alert variant={'filled'} severity={type} onClose={handleClose}>
        {t(content)}
      </Alert>
    </Snackbar>
  )
}

export default AppSnackbar
