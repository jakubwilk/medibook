import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextField, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { important } from '../../utils'

interface IProps {
  fieldName: string
  label?: string
  helperText?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  helperText: {
    color: theme.palette.grey[600],
    fontSize: important('0.85rem'),
  },
}))

const PatientNumber = ({ fieldName, label, helperText }: IProps) => {
  const { t } = useTranslation()
  const { control } = useFormContext()
  const classes = useStyles()

  return (
    <div className={'pb-8'}>
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { name, value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            {helperText && (
              <Typography className={clsx('pb-4', classes.helperText)}>
                {helperText}
              </Typography>
            )}
            <TextField
              name={name}
              label={label}
              defaultValue={value}
              {...(error?.message && { helperText: t(error.message) })}
              className={'w-full'}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
            />
          </>
        )}
      />
    </div>
  )
}

export default PatientNumber
