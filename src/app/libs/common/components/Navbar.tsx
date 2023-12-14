import { MouseEvent, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Divider,
  Menu,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { useFontSizeContext } from '../hooks'
import { FontSizeEnum } from '../models'
import { important } from '../utils'

import { BackToHome } from './back-to-home'
import { ChangeFontSize } from './change-font-size'
import { ChangeLanguage } from './change-language'
import MobileMenu from './MobileMenu'

interface IProps {
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

const Navbar = ({ displaySupportMenu = true }: IProps) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const { currentSize } = useFontSizeContext()

  const navbarHeightClass = useMemo(() => {
    switch (currentSize) {
      case FontSizeEnum.LARGER:
        return isMobileView ? 'h-[80px]' : 'h-[90px]'
      case FontSizeEnum.VERY_LARGE:
        return isMobileView ? 'h-[90px]' : 'h-[110px]'
      case FontSizeEnum.DEFAULT:
      default:
        return 'h-[70px]'
    }
  }, [currentSize, isMobileView])

  const handleOpenMenuClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }, [])

  const handleCloseMenuClick = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <header className={clsx(`w-full`, navbarHeightClass, classes.header)}>
      <div className={'container h-[inherit] px-4 mx-auto'}>
        <div className={'h-full flex items-center justify-between gap-4'}>
          <Typography variant={'h1'} className={classes.logo}>
            {'mediBook'}
          </Typography>
          <div className={'flex items-center gap-4'}>
            <BackToHome isIconButton={isMobileView} />
            <Divider
              orientation={'vertical'}
              variant={'fullWidth'}
              className={classes.divider}
            />
            {displaySupportMenu && !isMobileView && (
              <>
                <ChangeFontSize />
                <ChangeLanguage />
              </>
            )}
            {displaySupportMenu && isMobileView && (
              <>
                <Button onClick={handleOpenMenuClick}>
                  {t('global:navigation.menu')}
                </Button>
                <Menu
                  open={isMenuOpen}
                  onClose={handleCloseMenuClick}
                  anchorEl={anchorEl}
                >
                  <MobileMenu handleClose={handleCloseMenuClick} />
                </Menu>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
