import { MouseEvent, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FormatSize } from '@mui/icons-material'

import { ButtonIcon } from '../button'

import ChangeFontSizeDropdown from './ChangeFontSizeDropdown'

const ChangeFontSize = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null)

  const handleChangeFontSizeClick = useCallback(
    (ev: MouseEvent<HTMLButtonElement>, state: boolean) => {
      setIsOpen(state)
      setAnchorElement(ev.currentTarget)
    },
    [],
  )

  const handleCloseChangeFontSizeClick = useCallback(() => {
    setIsOpen(false)
    setAnchorElement(null)
  }, [])

  return (
    <>
      <ButtonIcon
        icon={<FormatSize />}
        text={t('global:navigation.fontSize')}
        tooltipText={t('global:tooltip.navigation.fontSizeTitle')}
        handleClick={(ev: MouseEvent<HTMLButtonElement>) =>
          handleChangeFontSizeClick(ev, true)
        }
      />
      <ChangeFontSizeDropdown
        isOpen={isOpen}
        anchorElement={anchorElement}
        handleClose={handleCloseChangeFontSizeClick}
      />
    </>
  )
}

export default ChangeFontSize
