import { isEqual } from 'lodash'

import { VISITS_PATIENT_MOCK } from '../../../mock'
import { handleEmptyException } from '../../common'
import { IVerifyForm } from '../models'

export const verifyPatient = async ({ patientNumber }: IVerifyForm) => {
  try {
    if (isEqual(patientNumber, 'M123456') || isEqual(patientNumber, 'W123456')) {
      handleEmptyException()
    }

    return { data: VISITS_PATIENT_MOCK, error: null }
  } catch (err) {
    return { data: null, error: 'global:validation.patientNotExist' }
  }
}
