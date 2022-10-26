import React from 'react'
import './Button.css'
type Props = {
  label: string
  bg: string
  color: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  type:'submit'|'button'
}
const Button = ({ label, bg, color, onClick, type }: Props) => {
  return (
    <div className={'button'}>
      <button
        style={{ backgroundColor: `${bg}`, color: `${color}` }}
        onClick={onClick}
        type={type}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
