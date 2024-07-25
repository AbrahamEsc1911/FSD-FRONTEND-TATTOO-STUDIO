import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register } from '../Register/Register.jsx'
import { Login } from '../Login/Login.jsx'
import { Profile } from '../Profile/Profile.jsx'
import { Services } from '../Services/Services.jsx'
import { Admin } from '../Admin/Admin.jsx'

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/services' element={<Services />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
    </Routes>
    </>
  )
}
