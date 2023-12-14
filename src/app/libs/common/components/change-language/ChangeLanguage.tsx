import { MouseEvent, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Language } from '@mui/icons-material'

import { ButtonIcon } from '../button'

import ChangeLanguageDropdown from './ChangeLanguageDropdown'

const ChangeLanguage = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null)

  const handleChangeLanguageClick = useCallback(
    (ev: MouseEvent<HTMLButtonElement>, state: boolean) => {
      setIsOpen(state)
      setAnchorElement(ev.currentTarget)
    },
    [],
  )

  const handleCloseChangeLanguageClick = useCallback(() => {
    setIsOpen(false)
    setAnchorElement(null)
  }, [])

  return (
    <>
      <ButtonIcon
        icon={<Language />}
        text={t('global:navigation.changeLanguage')}
        tooltipText={t('global:tooltip.navigation.changeLanguageTitle')}
        handleClick={(ev: MouseEvent<HTMLButtonElement>) =>
          handleChangeLanguageClick(ev, true)
        }
      />
      <ChangeLanguageDropdown
        isOpen={isOpen}
        anchorElement={anchorElement}
        handleClose={handleCloseChangeLanguageClick}
      />
    </>
  )
}

export default ChangeLanguage
