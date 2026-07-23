import React from 'react'   //used rafce for bolier plate 
import { Route } from 'react-router-dom'

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