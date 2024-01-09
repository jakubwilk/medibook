import { MouseEvent, useCallback, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField, Theme, Typography } from '@mui/material'
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
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = useCallback(() => setShowPassword((show) => !show), [])

  const handleMouseDownPassword = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }, [])

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
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position={'end'}>
                  <IconButton
                    aria-label={'toggle password visibility'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge={'end'}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </>
      )}
    />
  )
}

export default CodeInput
