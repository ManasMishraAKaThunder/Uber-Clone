import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/Pages/Home'
import UserLogin from '@/Pages/UserLogin'
import UserSignup from '@/Pages/UserSignup'
import Captainlogin from '@/Pages/Captainlogin'
import Captainsignup from  '@/Pages/Captainsignup'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<Captainsignup />} />
      </Routes>
    </div>
  )
}

export default App
