import { MouseEvent, ReactNode, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { isNil } from 'lodash'

import { important } from '../../utils'

interface IProps {
  icon: ReactNode
  text?: string
  tooltipText?: string
  href?: string
  handleClick?: (ev: MouseEvent<HTMLButtonElement>) => void
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

const ButtonIcon = ({ icon, text, tooltipText, href, handleClick }: IProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))

  const ButtonComponent = useMemo(
    () => (
      <Button onClick={handleClick} variant={'text'} className={classes.button}>
        {icon}
        {text && !isMobileView && (
          <Typography className={classes.buttonText}>{text}</Typography>
        )}
      </Button>
    ),
    [classes.button, classes.buttonText, handleClick, icon, isMobileView, text],
  )

  return (
    <Tooltip title={tooltipText}>
      {isNil(href) ? ButtonComponent : <Link to={href}>{ButtonComponent}</Link>}
    </Tooltip>
  )
}

export default ButtonIcon
