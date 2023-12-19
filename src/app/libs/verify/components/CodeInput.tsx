import { Controller, useFormContext } from 'react-hook-form'
import { TextField, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { important } from '../../common'

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
const CodeInput = ({ fieldName, label, helperText }: IProps) => {
  const { control } = useFormContext()
  const classes = useStyles()

  return (
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
            helperText={error?.message}
            className={'w-full'}
            onChange={onChange}
            onBlur={onBlur}
            error={!!error}
          />
        </>
      )}
    />
  )
}

export default CodeInput
