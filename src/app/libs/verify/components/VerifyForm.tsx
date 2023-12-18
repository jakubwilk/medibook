import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Typography } from '@mui/material'
import * as z from 'zod'

import { PatientNumber } from '../../common'
import { IVerifyForm } from '../models'

import CodeInput from './CodeInput'

const VerifyForm = () => {
  const form = useForm<IVerifyForm>({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      patientNumber: '',
      code: '',
    },
    resolver: zodResolver(
      z.object({
        patientNumber: z.string({ required_error: 'Pole jest wymagane' }),
        code: z
          .string({ required_error: 'Pole jest wymagane' })
          .length(6, 'Kod weryfikacjyjny powinien zawierać 6 znaków')
          .nullable(),
      }),
    ),
  })

  const handleSubmit = useCallback((data: IVerifyForm) => {
    console.log('data', data)
  }, [])

  return (
    <FormProvider {...form}>
      <div>
        <Typography variant={'h2'}>{'Weryfikacja pacjenta'}</Typography>
        <Typography>
          {
            'Wprowadź poniższe dane by sprawdzić bez potrzeby logowania aktualnie utworzone\r'
          }
          {'wizyty\r'}
        </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <PatientNumber
            fieldName={'patientNumber'}
            label={'Numer pacjenta'}
            helperText={
              'Numer pacjenta zaczyna sie od litery M lub W, a następnie należy wprowadzić ciąg 6 cyfr'
            }
          />
          <CodeInput
            fieldName={'code'}
            label={'Kod weryfikacyjny'}
            helperText={
              'Pacjent otrzymywał kod weryfikacyjny podczas rejestracji do przychodni lub przy jednorazowej rejestracji'
            }
          />
        </form>
      </div>
    </FormProvider>
  )
}

export default VerifyForm
