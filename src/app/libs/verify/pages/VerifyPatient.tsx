import { useEffect } from 'react'
import { isNil } from 'lodash'

import { AppSnackbar, PageWithBars, useSnackbarContext } from '../../common'
import { VerifyForm } from '../components'

const VerifyPatient = () => {
  const { isOpen, snackbarContent, snackbarType, handleCloseSnackbar } =
    useSnackbarContext()

  useEffect(() => {
    handleCloseSnackbar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWithBars>
      <div className={'h-full min-h-[inherit] flex items-center justify-center'}>
        <VerifyForm />
      </div>
      {!isNil(snackbarType) && (
        <AppSnackbar
          content={snackbarContent}
          type={snackbarType}
          isOpen={isOpen}
          handleClose={handleCloseSnackbar}
        />
      )}
    </PageWithBars>
  )
}

export default VerifyPatient
