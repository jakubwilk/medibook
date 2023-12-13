import { ReactNode, useCallback } from 'react'
import { FormatSize, Home, Language } from '@mui/icons-material'
import { Divider, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { important } from '../utils'

import { ButtonIcon } from './button'

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

  const handleBackToHomeClick = useCallback(() => {
    console.log('handleBackToHomeClick')
  }, [])

  const handleChangeFontSizeClick = useCallback(() => {
    console.log('handleChangeFontSizeClick')
  }, [])

  const handleChangeLanguageClick = useCallback(() => {
    console.log('handleChangeLanguageClick')
  }, [])

  return (
    <header className={clsx('h-[70px] w-full', classes.header)}>
      <div className={'container h-[inherit] mx-auto'}>
        <div className={'h-full flex items-center justify-between gap-4'}>
          <Typography variant={'h1'} className={classes.logo}>
            {'mediBook'}
          </Typography>
          <div className={'flex items-center gap-4'}>
            <ButtonIcon
              icon={<Home />}
              text={'Strona główna'}
              tooltipText={'Powrót do strony głównej'}
              handleClick={handleBackToHomeClick}
            />
            {menu && menu}
            <Divider
              orientation={'vertical'}
              variant={'fullWidth'}
              className={classes.divider}
            />
            {displaySupportMenu && (
              <>
                <ButtonIcon
                  icon={<FormatSize />}
                  text={'Rozmiar czcionki'}
                  tooltipText={'Zmień rozmiar czcionki na stronie'}
                  handleClick={handleChangeFontSizeClick}
                />
                <ButtonIcon
                  icon={<Language />}
                  text={'Zmiana języka'}
                  tooltipText={'Zmień język strony'}
                  handleClick={handleChangeLanguageClick}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
