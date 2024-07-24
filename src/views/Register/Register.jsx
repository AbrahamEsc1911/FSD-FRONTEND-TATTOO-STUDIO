import React, { useState } from 'react'
import { Cinput } from '../../components/Cinput/Cinput.jsx'
import './Register.css'

export const Register = () => {

  const [registerData, setregisterData] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  )

  const [hideContent, sethideContent] = useState(false)
  const [passwordLenght, setpasswordLenght] = useState(false)

  const handleChange = (e) => {
    setregisterData(prevState => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    )) 
  }
  console.log(registerData)
  const register = () => {
    if(registerData.email.length === 0 || registerData.password.length === 0){
      return sethideContent(true)
    } else if (registerData.email.length > 0 && registerData.password.length > 0){
       sethideContent(false)
    }

    if(registerData.password.length < 8 || registerData.password.length > 12) {
      return setpasswordLenght(true)
    } else if (registerData.password.length > 7 || registerData.password.length < 12){
      setpasswordLenght(false)
   }


  }

  return (
    <>
      <h1>Registro</h1>
      <div><Cinput type="text" name="email" placeholder="Email (Opcional)" emitFuntion={handleChange} /></div>
      <div><Cinput type="email" name="email" placeholder="email" emitFuntion={handleChange} /></div>
      <div><Cinput type="password" name="password" placeholder="password" emitFuntion={handleChange} /></div>
      <p className={hideContent ? "" : "hidden-content"}>El correo y la contraseña son obligatorios</p>
      <p className={passwordLenght ? "" : "hidden-content"}>la contraseña debe ser mayor a 8 y menor a 12</p>
      <div><Cinput type="button" name="register" value="Register" onClickFuntion={register} /></div>
    </>
  )
}
