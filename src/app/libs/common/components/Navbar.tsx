import { ReactNode } from 'react'
import { Divider, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { important } from '../utils'

import { BackToHome } from './back-to-home'
import { ChangeFontSize } from './change-font-size'
import { ChangeLanguage } from './change-language'

interface IProps {
  menu?: ReactNode[]
  displaySupportMenu?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: 'white',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  logo: {
    fontSize: important('18px'),
  },
  divider: {
    borderColor: theme.palette.grey[200],
    width: important('1px'),
    height: important('24px'),
  },
}))

const Navbar = ({ menu, displaySupportMenu = true }: IProps) => {
  const classes = useStyles()

  return (
    <header className={clsx('h-[70px] w-full', classes.header)}>
      <div className={'container h-[inherit] mx-auto'}>
        <div className={'h-full flex items-center justify-between gap-4'}>
          <Typography variant={'h1'} className={classes.logo}>
            {'mediBook'}
          </Typography>
          <div className={'flex items-center gap-4'}>
            <BackToHome />
            {menu && menu}
            <Divider
              orientation={'vertical'}
              variant={'fullWidth'}
              className={classes.divider}
            />
            {displaySupportMenu && (
              <>
                <ChangeFontSize />
                <ChangeLanguage />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
