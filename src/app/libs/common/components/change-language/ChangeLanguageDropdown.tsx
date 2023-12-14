import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Popover, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'
import { changeLanguage } from 'i18next'

import { LanguageTypeEnum } from '../../models'
import { important } from '../../utils'

interface IProps {
  isOpen: boolean
  anchorElement: HTMLButtonElement | null
  handleClose: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    minWidth: 150,
  },
  button: {
    display: 'flex',
    justifyContent: important('flex-start'),
  },
  buttonText: {
    fontSize: important('0.8rem'),
    color: important(theme.palette.grey[600]),
    textTransform: 'none',
  },
}))

const ChangeLanguageDropdown = ({ isOpen, anchorElement, handleClose }: IProps) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const handleSetLanguageClick = useCallback(
    async (language: LanguageTypeEnum) => {
      await changeLanguage(language)
      handleClose()
    },
    [handleClose],
  )

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorElement}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <div className={clsx('flex items-center flex-col gap-2 p-2', classes.content)}>
        <Button
          variant={'text'}
          onClick={() => handleSetLanguageClick(LanguageTypeEnum.PL)}
          className={clsx('w-full items-center', classes.button)}
        >
          {'🇵🇱'}
          <Typography className={clsx('pl-2', classes.buttonText)}>
            {t('global:languages.polish')}
          </Typography>
        </Button>
        <Button
          variant={'text'}
          onClick={() => handleSetLanguageClick(LanguageTypeEnum.EN)}
          className={clsx('w-full items-center', classes.button)}
        >
          {'🇬🇧'}
          <Typography className={clsx('pl-2', classes.buttonText)}>
            {t('global:languages.english')}
          </Typography>
        </Button>
      </div>
    </Popover>
  )
}

export default ChangeLanguageDropdown
