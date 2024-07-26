import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register } from '../Register/Register.jsx'
import { Login } from '../Login/Login.jsx'
import { Profile } from '../Profile/Profile.jsx'
import { Services } from '../Services/Services.jsx'
import { Admin } from '../Admin/Admin.jsx'
import { Artists } from '../Artists/Artists.jsx'
import { Appointments } from '../Appointments/Appointments.jsx'
import { NewApp } from '../NewApp/NewApp.jsx'

export const Body = () => {

  const passport = JSON.parse(localStorage.getItem("passport"))
  let role = null
  if (passport) { role = passport.tokenData.role }

  return (
    <>
      <Routes>
        {!passport && <Route path='/register' element={<Register />} />}
        <Route path='/services' element={<Services />} />
        {role === 3 && <Route path='/admin' element={<Admin />} />}
        {!passport && <Route path='/login' element={<Login />} /> }
        {passport && <Route path='/profile' element={<Profile />} />}
        <Route path='/artists' element={<Artists />} />
        {passport && <Route path='/appointments' element={<Appointments />} /> }
        {passport && <Route path='/newapp' element={<NewApp />} /> }
      </Routes>
    </>
  )
}
