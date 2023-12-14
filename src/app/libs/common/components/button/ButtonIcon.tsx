import { MouseEvent, ReactNode } from 'react'
import {
  Button,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

import { important } from '../../utils'

interface IProps {
  icon: ReactNode
  text?: string
  tooltipText?: string
  href?: string
  handleClick?: (ev: MouseEvent<HTMLButtonElement>) => void
  isLink?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    display: 'flex',
    flexDirection: 'column',
    color: important(theme.palette.primary.main),
    '&:hover': {
      '& .MuiTypography-root': {
        color: important(theme.palette.primary.main),
      },
    },
  },
  buttonText: {
    fontSize: important('0.75rem'),
    color: important(theme.palette.grey[600]),
    marginTop: important('0.25rem'),
  },
}))

const ButtonIcon = ({ icon, text, tooltipText, href, isLink, handleClick }: IProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Tooltip title={tooltipText}>
      <Button
        onClick={handleClick}
        variant={'text'}
        className={classes.button}
        {...(isLink && { href })}
      >
        {icon}
        {text && !isMobileView && (
          <Typography className={classes.buttonText}>{text}</Typography>
        )}
      </Button>
    </Tooltip>
  )
}

export default ButtonIcon
