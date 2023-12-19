import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'
import * as z from 'zod'

import { important, PatientNumber } from '../../common'
import { IVerifyForm } from '../models'

import CodeInput from './CodeInput'

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: important('1.5rem'),
    fontWeight: important(theme.typography.fontWeightBold as number),
  },
  description: {
    color: theme.palette.grey[800],
  },
  box: {
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  button: {
    marginTop: important('1.5rem'),
  },
}))

const VerifyForm = () => {
  const classes = useStyles()

  const form = useForm<IVerifyForm>({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      patientNumber: '',
      code: '',
    },
    resolver: zodResolver(
      z.object({
        patientNumber: z
          .string({ required_error: 'Pole jest wymagane' })
          .min(7, 'Niepoprawny numer pacjenta'),
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
      <div className={clsx('max-w-[550px] p-8', classes.box)}>
        <Typography variant={'h2'} className={clsx('pb-4', classes.title)}>
          {'Weryfikacja pacjenta'}
        </Typography>
        <Typography className={clsx('pb-8', classes.description)}>
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
          <Button
            type={'submit'}
            variant={'contained'}
            className={clsx('w-full h-[50px]', classes.button)}
          >
            {'Sprawdź'}
          </Button>
        </form>
      </div>
    </FormProvider>
  )
}

export default VerifyForm
