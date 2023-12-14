import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Home } from '@mui/icons-material'

import { ButtonIcon } from '../button'

import BackToHomeDialog from './BackToHomeDialog'

const BackToHome = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleBackToHomeClick = useCallback((state: boolean) => {
    setIsOpen(state)
  }, [])

  return (
    <>
      <ButtonIcon
        icon={<Home />}
        text={t('global:navigation.home')}
        tooltipText={t('global:tooltip.navigation.homeTitle')}
        handleClick={() => handleBackToHomeClick(true)}
      />
      <BackToHomeDialog
        isOpen={isOpen}
        handleClose={() => handleBackToHomeClick(false)}
      />
    </>
  )
}

export default BackToHome
