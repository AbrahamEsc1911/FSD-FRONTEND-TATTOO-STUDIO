import React from 'react'
import { Cinput } from '../../components/Cinput/Cinput.jsx'

export const Register = () => {

    const handleChange = () => {

    }

    const register = () => {

    }

  return (
    <>
    <Cinput type="text" name="email" placeholder="Email" emitFuntion={handleChange} />
    <Cinput type="password" name="password" placeholder="password" emitFuntion={handleChange} />
    <Cinput type="button" name="register" value="Register" onClickFuntion={register} />
    </>
  )
}
