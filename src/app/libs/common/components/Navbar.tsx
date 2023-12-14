import { ReactNode, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { FormatSize, Language } from '@mui/icons-material'
import { Divider, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { important } from '../utils'

import { BackToHome } from './backToHome'
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
  const { t } = useTranslation()
  const classes = useStyles()

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
            <BackToHome />
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
                  text={t('global:navigation.fontSize')}
                  tooltipText={t('global:tooltip.navigation.fontSizeTitle')}
                  handleClick={handleChangeFontSizeClick}
                />
                <ButtonIcon
                  icon={<Language />}
                  text={t('global:navigation.changeLanguage')}
                  tooltipText={t('global:tooltip.navigation.changeLanguageTitle')}
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
