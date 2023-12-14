import { ReactNode, useContext, useMemo } from 'react'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { FontSizeContext } from '../context'
import { FontSizeEnum, IFontSizeContext } from '../models'

const useStyles = makeStyles(() => ({
  page: {
    height: '100%',
  },
}))

interface IProps {
  children: ReactNode
}

const PageWithBars = ({ children }: IProps) => {
  const classes = useStyles()
  const { currentSize } = useContext<IFontSizeContext>(FontSizeContext)

  const pageClass = useMemo(() => {
    switch (currentSize) {
      case FontSizeEnum.LARGER:
        return {
          minHeight: 'min-h-[calc(100vh-142px)]',
        }
      case FontSizeEnum.VERY_LARGE:
        return {
          minHeight: 'min-h-[calc(100vh-162px)]',
        }
      case FontSizeEnum.DEFAULT:
      default:
        return {
          minHeight: 'min-h-[calc(100vh-122px)]',
        }
    }
  }, [currentSize])

  return <div className={clsx(classes.page, pageClass.minHeight)}>{children}</div>
}

export default PageWithBars
