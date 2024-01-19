import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import MyLogin from './components/MyLogin'
import Profile from './components/profile'

function App() {
 

  return (
    <UserContextProvider>
        <h1>Hello world</h1>
        <MyLogin />
        <Profile />

    </UserContextProvider>
  )
}

export default App
