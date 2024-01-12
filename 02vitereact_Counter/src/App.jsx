import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Card from './components/Card'
import ColorChanger from './components/ColorChanger'
import PassGenerator from './components/PassGenerator'
import Header from './components/header'
import Footer from './components/footer'
import { Route, BrowserRouter as Router,Routes  } from 'react-router-dom' 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Github from './components/Github'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
    {/* <Router>
    <Header />
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:userid'element={<User />} />
          <Route path='/github'element={<Github />} />
       
      </Routes>
    <Footer />
    </Router> */}

    <UserContextProvider>
        <Login />
        <Profile />
    </UserContextProvider>  

    </>
  )
}

export default App
