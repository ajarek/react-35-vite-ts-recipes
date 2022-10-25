import React from 'react'
type Props ={
  type: string
  value: string
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({type, value, onChange}:Props) => {
  return (
    <div>
      <input
       type={type} 
       value={value}
       onChange={onChange}
       />
    </div>
  )
}

export default Input