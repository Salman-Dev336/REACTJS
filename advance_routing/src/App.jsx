import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import {Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/men' element={<Men />} />
        <Route path='/products/women' element={<Women />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
