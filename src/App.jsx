import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Couples from './components/Couples';
import Individuals from './components/Individuals';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <About/>
    <Couples/>
    <Individuals/>
    <Contact/>
    </>
  )
}

export default App
