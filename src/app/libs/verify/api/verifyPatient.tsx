import { isEqual } from 'lodash'

import { IVerifyForm } from '../models'

export const verifyPatient = async ({ patientNumber }: IVerifyForm) => {
  if (isEqual(patientNumber, 'M123456') || isEqual(patientNumber, 'W123456')) {
    return { data: null, error: '' }
  }

  return { data: 'test', error: null }
}
