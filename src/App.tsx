import React, { FC } from 'react'
import './App.css'
import { Stack } from '@mui/material'
import { Header } from './pages'
import Sodoku from '@pages/Sodoku'

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
