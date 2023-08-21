import React, { FC } from 'react'
import './App.css'
import { Stack } from '@mui/material'
import { HomePage } from './pages'

const App: FC = () => {
  return (
    <Stack sx={{ width: '100%', maxWidth: '1920px' }}>
      <HomePage />
    </Stack>
  )
}

export default App
