import { useCallback, useState } from 'react'
import { Home } from '@mui/icons-material'

import { ButtonIcon } from '../button'

import BackToHomeDialog from './BackToHomeDialog'

const BackToHome = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleBackToHomeClick = useCallback((state: boolean) => {
    setIsOpen(state)
  }, [])

  return (
    <>
      <ButtonIcon
        icon={<Home />}
        text={'Strona główna'}
        tooltipText={'Powrót do strony głównej'}
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
