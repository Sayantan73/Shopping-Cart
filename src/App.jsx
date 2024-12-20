import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-900'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
