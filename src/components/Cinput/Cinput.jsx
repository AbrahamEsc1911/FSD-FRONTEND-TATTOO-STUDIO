import React from 'react'

export const Cinput = ({ type, name, placeholder, emitFuntion, onClickFuntion, value, min}) => {

  return (
    <>
    <input type={type} name={name} placeholder={placeholder} onChange={emitFuntion} onClick={onClickFuntion} value={value} min={min}/>
    </>
  )
}
