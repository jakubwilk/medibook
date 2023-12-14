import { useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Divider, MenuItem, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'
import { changeLanguage } from 'i18next'
import { isNil } from 'lodash'

import { FontSizeContext } from '../context'
import { FontSizeEnum, IFontSizeContext, LanguageTypeEnum } from '../models'
import { important } from '../utils'

interface IProps {
  handleClose: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  disabledText: {
    fontSize: important('0.75rem'),
    textTransform: 'uppercase',
    color: important(theme.palette.grey[900]),
  },
  buttonText: {
    fontSize: important('0.8rem'),
    color: important(theme.palette.grey[600]),
  },
}))

const MobileMenu = ({ handleClose }: IProps) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const { setCurrentSize } = useContext<IFontSizeContext>(FontSizeContext)

  const handleSetFontSizeClick = useCallback(
    (size: FontSizeEnum) => {
      const pageElement = document.querySelector('#html') as HTMLElement

      if (!isNil(pageElement)) {
        pageElement.style.fontSize = size
        setCurrentSize(size)
      }

      handleClose()
    },
    [handleClose, setCurrentSize],
  )

  const handleSetLanguageClick = useCallback(
    async (language: LanguageTypeEnum) => {
      await changeLanguage(language)
      handleClose()
    },
    [handleClose],
  )

  return (
    <>
      <MenuItem disabled>
        <Typography className={classes.disabledText}>
          {t('global:navigation.fontSize')}
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleSetFontSizeClick(FontSizeEnum.DEFAULT)}>
        <Typography className={clsx('pl-2', classes.buttonText)}>
          {t('global:fontSize.default')}
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleSetFontSizeClick(FontSizeEnum.LARGER)}>
        <Typography className={clsx('pl-2', classes.buttonText)}>
          {t('global:fontSize.larger')}
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleSetFontSizeClick(FontSizeEnum.VERY_LARGE)}>
        <Typography className={clsx('pl-2', classes.buttonText)}>
          {t('global:fontSize.veryLarge')}
        </Typography>
      </MenuItem>
      <Divider orientation={'horizontal'} variant={'fullWidth'} />
      <MenuItem disabled>
        <Typography className={classes.disabledText}>
          {t('global:navigation.changeLanguage')}
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleSetLanguageClick(LanguageTypeEnum.PL)}>
        {'🇵🇱'}
        <Typography className={clsx('pl-2', classes.buttonText)}>
          {t('global:languages.polish')}
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleSetLanguageClick(LanguageTypeEnum.EN)}>
        {'🇬🇧'}
        <Typography className={clsx('pl-2', classes.buttonText)}>
          {t('global:languages.english')}
        </Typography>
      </MenuItem>
    </>
  )
}

export default MobileMenu
