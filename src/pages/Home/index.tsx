import React, { FC } from 'react'

import { Stack } from '@mui/material'

const HomePage: FC = () => {
  return (
    <>
      <Stack sx={{ width: '500px', m: 'auto', p: '100px' }}>
        <button onClick={() => console.log(name)}>ok</button> <br />
      </Stack>
    </>
  )
}

export default React.memo(HomePage)
