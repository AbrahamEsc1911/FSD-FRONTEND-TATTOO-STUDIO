import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register } from '../Register/Register.jsx'
import { Login } from '../Login/Login.jsx'
import { Profile } from '../Profile/Profile.jsx'
import { Services } from '../Services/Services.jsx'
import { Admin } from '../Admin/Admin.jsx'
import { Artists } from '../Artists/Artists.jsx'
import { Appointments } from '../Appointments/Appointments.jsx'
import { NewApp } from '../NewApp/NewApp.jsx'
import { NotFound } from '../NotFound/NotFound.jsx'
import { Home } from '../Home/Home.jsx'

export const Body = () => {

  const passport = JSON.parse(localStorage.getItem("passport"))
  let role = null
  if (passport) { role = passport.tokenData.role }

  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='home' element={< Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/services' element={<Services />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} /> :
        <Route path='/profile' element={<Profile />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/newapp' element={<NewApp />} />
      </Routes>
    </>
  )
}
