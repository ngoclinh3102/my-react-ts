import React, { FC } from 'react'
import './App.css'
import { Stack } from '@mui/material'
import { Header, Sodoku } from './pages'

const App: FC = () => {
  return (
    <Stack sx={{ width: '100%', maxWidth: '1920px' }}>
      <div>Hello World 2</div>
      <Header />
      <Sodoku />
    </Stack>
  )
}

export default App
