import React from 'react'
type Props ={
  name: string
  type: string
  value: string
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({type, value, onChange, name}:Props) => {
  return (
    <div>
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