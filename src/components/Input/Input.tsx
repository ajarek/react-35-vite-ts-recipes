import React from 'react'
import './Input.css'
type Props ={
  name: string
  type: string
  value: string
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({type, value, onChange, name}:Props) => {
  return (
    <div className={'input'}>
      <input
       name={name}
       type={type} 
       value={value}
       onChange={onChange}
       />
    </div>
  )
}

export default Input