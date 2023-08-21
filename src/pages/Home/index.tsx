import React, { FC, useState } from 'react'
import InputText from '@components/inputText'
import { Stack } from '@mui/material'

const HomePage: FC = () => {
  const [name, setName] = useState<string>('')
  return (
    <>
      <Stack sx={{ width: '500px', m: 'auto', p: '100px' }}>
        <InputText name='name' value={name} setValue={setName} /> <br />
        <InputText name='name' value={name} setValue={setName} variant='filled' /> <br />
        <InputText name='name' value={name} setValue={setName} variant='outlined' /> <br />
        <button onClick={() => console.log(name)}>ok</button> <br />
      </Stack>
    </>
  )
}

export default React.memo(HomePage)
