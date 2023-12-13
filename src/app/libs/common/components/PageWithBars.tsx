import { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  page: {
    height: '100%',
    minHeight: 'calc(100vh - 120px)',
  },
}))

interface IProps {
  children: ReactNode
}

const PageWithBars = ({ children }: IProps) => {
  const classes = useStyles()

  return <div className={classes.page}>{children}</div>
}

export default PageWithBars
