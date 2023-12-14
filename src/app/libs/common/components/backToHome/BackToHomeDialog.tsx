import { forwardRef, ReactElement, Ref } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  const { children } = props
  return (
    <Slide direction={'up'} ref={ref} {...props}>
      {children}
    </Slide>
  )
})

const BackToHomeDialog = ({ isOpen, handleClose }: IProps) => {
  const { t } = useTranslation()

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      onClose={handleClose}
      keepMounted
    >
      <DialogTitle>{t('global:dialog.backToHomeTitle')}</DialogTitle>
      <DialogContent>
        <Typography>{t('global:dialog.backToHomeContent')}</Typography>
      </DialogContent>
      <DialogActions>
        <Button color={'success'}>{t('global:action.confirm')}</Button>
        <Button color={'error'} onClick={handleClose}>
          {t('global:action.cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default BackToHomeDialog
