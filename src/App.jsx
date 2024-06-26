import React from 'react'
import './App.css'
import Navbar from './Components/header/Navbar'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Skills from './Components/skills/Skills'
import Projects from './Components/projects/Projects'
import { Provider } from 'react-redux'
import Store from './store/Store'
import Contact from './Components/contact/Contact'
const App = () => {
  return (
    <Provider store={Store}><div>
      <Navbar/>
      <Home/>
      {/* <About/> */}
      <Skills/>
      <Projects/>
      <Contact/>
    </div></Provider>
  )
}

export default App