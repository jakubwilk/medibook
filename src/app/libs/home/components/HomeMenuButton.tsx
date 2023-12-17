import { ReactNode, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Theme, Typography, useMediaQuery, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { important } from '../../common'

interface IProps {
  href: string
  text: string
  icon: ReactNode
  description?: string
  className?: string
  isFullWidth?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.grey[300]}`,
    transition: 'all .1s ease-in-out',
    '&:hover, &:focus': {
      outline: 'none',
      backgroundColor: theme.palette.primary.main,
      '& .MuiTypography-root, & .MuiSvgIcon-root': {
        color: 'white',
      },
    },
  },
  title: {
    fontWeight: important(theme.typography.fontWeightBold as number),
    fontSize: important('1.15rem'),
  },
  description: {
    fontWeight: important(theme.typography.fontWeightLight as number),
    color: theme.palette.grey[600],
  },
}))

const HomeMenuButton = ({
  href,
  text,
  icon,
  description,
  isFullWidth = false,
  className,
}: IProps) => {
  const theme = useTheme()
  const classes = useStyles()
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))

  const mobileClassName = useMemo(() => {
    if (isFullWidth) {
      return 'w-full h-[250px]'
    }

    if (isMobileView) {
      return 'w-full'
    }

    return 'w-[300px] h-[250px]'
  }, [isMobileView, isFullWidth])

  return (
    <Link
      to={href}
      className={clsx(
        mobileClassName,
        classes.button,
        'flex items-center justify-center p-8',
        className,
      )}
    >
      <div className={'flex flex-col items-center justify-center'}>
        {icon}
        <div className={'flex flex-col items-center'}>
          <Typography variant={'h3'} className={clsx('pt-4', classes.title)}>
            {text}
          </Typography>
          <Typography className={clsx('text-center pt-2', classes.description)}>
            {description}
          </Typography>
        </div>
      </div>
    </Link>
  )
}

export default HomeMenuButton
