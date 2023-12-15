import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { clsx } from 'clsx'

interface IProps {
  href: string
  text: string
  icon: ReactNode
  description?: string
  className?: string
  isFullWidth?: boolean
}

const HomeMenuButton = ({
  href,
  text,
  icon,
  description,
  isFullWidth = false,
  className,
}: IProps) => {
  return (
    <Link
      to={href}
      className={clsx(`${isFullWidth ? 'w-full' : 'w-[300px]'} h-[250px]`, className)}
    >
      <div className={'flex flex-col justify-center h-[inherit]'}>
        {icon}
        <div className={'flex flex-col items-center'}>
          <Typography>{text}</Typography>
          <Typography>{description}</Typography>
        </div>
      </div>
    </Link>
  )
}

export default HomeMenuButton
