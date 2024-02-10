import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useMutation } from '@tanstack/react-query'
import { clsx } from 'clsx'
import { isNil } from 'lodash'
import * as z from 'zod'

import {
  important,
  PatientNumber,
  ROUTES,
  SnackbarTypeEnum,
  useSnackbarContext,
} from '../../common'
import { verifyPatient } from '../api'
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
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { handleOpenSnackbar, handleCloseSnackbar } = useSnackbarContext()
  const [isLoading, setIsLoading] = useState(false)
  const { mutate: verifyPatientMutation } = useMutation({
    mutationFn: verifyPatient,
    onMutate: () => setIsLoading(true),
    onSuccess: ({ data, error }) => {
      if (!isNil(error)) {
        handleOpenSnackbar(SnackbarTypeEnum.ERROR, error)
      } else {
        handleCloseSnackbar()
      }
      console.log('data', data)
      setIsLoading(false)
      navigate(ROUTES.VISITS, { state: { data } })
    },
  })

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
          .string({ required_error: 'global:validation.required' })
          .length(7, 'global:validation.incorrectPatientNumber')
          .refine((value) => {
            const numbers = value.slice(1)
            return (
              (value.startsWith('M') || value.startsWith('W')) &&
              numbers.match(/^[0-9]+$/)
            )
          }, 'global:validation.incorrectPatientNumber')
          .nullable(),
        code: z
          .string({ required_error: 'global:validation.required' })
          .length(8, 'global:validation.incorrectVerificationCode')
          .refine((value) => {
            return value.match(/^[0-9]+$/)
          }, 'global:validation.incorrectVerificationCode')
          .nullable(),
      }),
    ),
  })

  const handleSubmit = useCallback(
    (data: IVerifyForm) => {
      verifyPatientMutation(data)
    },
    [verifyPatientMutation],
  )

  return (
    <FormProvider {...form}>
      <div className={clsx('max-w-[550px] p-8', classes.box)}>
        <Typography variant={'h2'} className={clsx('pb-4', classes.title)}>
          {t('verify:title')}
        </Typography>
        <Typography className={clsx('pb-8', classes.description)}>
          {t('verify:description')}
        </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <PatientNumber
            fieldName={'patientNumber'}
            label={t('verify:fields.patientNumber')}
            helperText={t('verify:helperText.patientNumber')}
          />
          <CodeInput
            fieldName={'code'}
            label={t('verify:fields.verifyCode')}
            helperText={t('verify:helperText.verifyCode')}
          />
          <Button
            type={'submit'}
            variant={'contained'}
            className={clsx('w-full h-[50px]', classes.button)}
            disabled={isLoading}
          >
            {t('global:action.check')}
          </Button>
        </form>
      </div>
    </FormProvider>
  )
}

export default VerifyForm
