import { forwardRef, ReactElement, Ref } from 'react'
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
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      onClose={handleClose}
      keepMounted
    >
      <DialogTitle>{'Powrót do strony głównej'}</DialogTitle>
      <DialogContent>
        <Typography>
          {'Drogi użytkowniku, wykryto próbę przejścia do strony głównej. Akcja da\r'}
          {'spowoduje, że aktualna sesja zostanie zakończona i będzie wymagane podanie\r'}
          {'ponownie numeru pacjenta w celu przejścia do panelu. Czy na pewno chcesz\r'}
          {'kontynuować?\r'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color={'success'}>{'Potwierdź'}</Button>
        <Button color={'error'} onClick={handleClose}>
          {'Anuluj'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default BackToHomeDialog
