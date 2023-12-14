import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Home } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { useUserContext } from '../../../user'
import { ButtonIcon } from '../button'

import BackToHomeDialog from './BackToHomeDialog'

interface IProps {
  isIconButton?: boolean
}

const BackToHome = ({ isIconButton }: IProps) => {
  const { t } = useTranslation()
  const { isUser } = useUserContext()
  const [isOpen, setIsOpen] = useState(false)

  const handleBackToHomeClick = useCallback((state: boolean) => {
    setIsOpen(state)
  }, [])

  return (
    <>
      {isIconButton ? (
        <IconButton
          content={t('global:navigation.home')}
          {...(isUser && { onClick: () => handleBackToHomeClick(true) })}
          {...(!isUser && { href: '/' })}
          color={'primary'}
        >
          <Home />
        </IconButton>
      ) : (
        <ButtonIcon
          icon={<Home />}
          text={t('global:navigation.home')}
          tooltipText={t('global:tooltip.navigation.homeTitle')}
          {...(isUser && { onClick: () => handleBackToHomeClick(true) })}
          {...(!isUser && { href: '/' })}
        />
      )}
      <BackToHomeDialog
        isOpen={isOpen}
        handleClose={() => handleBackToHomeClick(false)}
      />
    </>
  )
}

export default BackToHome
