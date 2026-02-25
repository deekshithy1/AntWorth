import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import Footer from './components/Footer'



const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Layout/>}>
        
        <Route index element={<HomeScreen/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
