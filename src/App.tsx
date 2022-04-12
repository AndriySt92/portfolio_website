import React from 'react'
import './App.scss'
import { Navbar } from './components'
import { About, Header, Work } from './container'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
    </div>
  )
}

export default App
