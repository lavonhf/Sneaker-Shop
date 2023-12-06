import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componen/navbar'
import Index from './pages'
import Shop from './pages/shop'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Index />} />
        <Route path='shop' element={<Shop/>}/>
      </Routes>
    </>
  )
}

export default App
