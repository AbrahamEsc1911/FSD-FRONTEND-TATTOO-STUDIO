import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register } from '../Register/Register.jsx'
import { Login } from '../Login/Login.jsx'

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Register />} />
    </Routes>
    </>
  )
}
