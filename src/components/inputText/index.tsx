import { ChangeEvent, FC } from 'react'
import { TextField } from '@mui/material'

interface Props {
  name?: string
  value: string | null
  setValue: React.Dispatch<React.SetStateAction<string>>
  error?: string
  [x: string]: unknown
}

const InputText: FC<Props> = (p) => {
  const { name, value, setValue, error, ...rest } = p

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value)
    }
  }

  return (
    <>
      <TextField
        name={name}
        value={value}
        variant='standard'
        onChange={handleOnchange}
        autoComplete='off'
        error={!!error}
        {...rest}
      />
    </>
  )
}

export default InputText
