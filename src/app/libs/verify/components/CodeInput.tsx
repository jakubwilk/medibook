import { Controller, useFormContext } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'

interface IProps {
  fieldName: string
  label?: string
  helperText?: string
}

const CodeInput = ({ fieldName, label, helperText }: IProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { name, value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <TextField
            name={name}
            label={label}
            defaultValue={value}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            error={!!error}
          />
          {<Typography>{helperText}</Typography>}
        </>
      )}
    />
  )
}

export default CodeInput
