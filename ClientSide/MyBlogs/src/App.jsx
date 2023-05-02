import React from 'react'
import Header from './Components/Header.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App