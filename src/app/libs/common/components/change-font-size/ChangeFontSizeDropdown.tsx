import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Popover, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'
import { isNil } from 'lodash'

import { useFontSizeContext } from '../../hooks'
import { FontSizeEnum } from '../../models'
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

const ChangeFontSizeDropdown = ({ isOpen, anchorElement, handleClose }: IProps) => {
  const classes = useStyles()
  const { setCurrentSize } = useFontSizeContext()
  const { t } = useTranslation()

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
          onClick={() => handleSetFontSizeClick(FontSizeEnum.DEFAULT)}
          className={clsx('w-full', classes.button)}
        >
          <Typography className={clsx('pl-2', classes.buttonText)}>
            {t('global:fontSize.default')}
          </Typography>
        </Button>
        <Button
          variant={'text'}
          onClick={() => handleSetFontSizeClick(FontSizeEnum.LARGER)}
          className={clsx('w-full', classes.button)}
        >
          <Typography className={clsx('pl-2', classes.buttonText)}>
            {t('global:fontSize.larger')}
          </Typography>
        </Button>
        <Button
          variant={'text'}
          onClick={() => handleSetFontSizeClick(FontSizeEnum.VERY_LARGE)}
          className={clsx('w-full', classes.button)}
        >
          <Typography className={clsx('pl-2', classes.buttonText)}>
            {t('global:fontSize.veryLarge')}
          </Typography>
        </Button>
      </div>
    </Popover>
  )
}

export default ChangeFontSizeDropdown
