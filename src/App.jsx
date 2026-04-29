import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Home/>/ 
      <About/>
      <Contact/>
      <Login/>
    </div>
 )
}
export default App