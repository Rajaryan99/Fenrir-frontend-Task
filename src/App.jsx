import { Routes, Route } from 'react-router-dom'

import './App.css'
import Signup from './components/Auth/Signup'
import Dashboard from './components/dashboard/Dashboard'
import ScanActivity from './components/activity/ScanActivity'
import Login from './components/Auth/Login'

function App() {


  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/' element={<Dashboard/> } />
        <Route path='/activity' element={<ScanActivity/> } />
      </Routes>
    
    </>
  )
}

export default App
