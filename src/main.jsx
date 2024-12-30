import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Product from './Components/Product.jsx'
import Services from './Components/Services.jsx'
import Gallery from './Components/Gallery.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Slider from './Components/Home/Slider.jsx'
import Hero from './Components/Home/Hero.jsx'




const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='' element={<App/>}>
    <Route path='/' element={<Slider/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   



  </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
