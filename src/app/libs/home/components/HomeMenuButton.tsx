import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Theme, Typography } from '@mui/material'
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
    '&:hover, &:focus': {
      outline: 'none',
    },
  },
  title: {
    fontWeight: important(theme.typography.fontWeightBold as number),
    fontSize: important('1.15rem'),
  },
  description: {
    color: theme.palette.grey[500],
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
  const classes = useStyles()

  return (
    <Link
      to={href}
      className={clsx(
        `${isFullWidth ? 'w-full' : 'w-[300px]'} h-[250px]`,
        classes.button,
        'flex items-center justify-center p-8',
        className,
      )}
    >
      <div className={'flex flex-col items-center justify-center'}>
        {icon}
        <div className={'flex flex-col items-center'}>
          <Typography variant={'h3'} className={classes.title}>
            {text}
          </Typography>
          <Typography className={clsx('text-center', classes.description)}>
            {description}
          </Typography>
        </div>
      </div>
    </Link>
  )
}

export default HomeMenuButton
