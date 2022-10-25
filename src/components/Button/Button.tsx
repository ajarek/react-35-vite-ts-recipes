import React from 'react'
import './Button.css'
type Props = {
  label: string
  bg: string
  color: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const Button = ({ label, bg, color, onClick }: Props) => {
  return (
    <div className={'button'}>
      <button
        style={{ backgroundColor: `${bg}`, color: `${color}` }}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
