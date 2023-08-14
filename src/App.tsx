import React, { FC } from 'react'
import logo from './logo.svg'
import './App.css'
import { HomePage } from './pages'

const App: FC = () => {
  return (
    <div style={{ margin: '100px' }}>
      <img src={logo} className='App-logo' alt='logo' />
      <HomePage />
    </div>
  )
}

export default App
