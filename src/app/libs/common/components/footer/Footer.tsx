import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import FooterCopyright from './FooterCopyright'

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: 'white',
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={clsx('h-[50px] w-full', classes.footer)}>
      <div className={'container h-[inherit] mx-auto'}>
        <div className={'h-full flex items-center justify-between'}>
          <FooterCopyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer
