import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register } from '../Register/Register.jsx'

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}
