import { useEffect } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  

  const location=useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [location.pathname])

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
