import React from 'react'
import Button from '../Button/Button'
import './Header.css'
type Props={
  addRecipe:(e: React.MouseEvent<HTMLButtonElement>) => void
}
const Header = ({addRecipe}:Props) => {
  return (
    <div 
    className={'header'}
    >
     <h1>MY RECIPES👨🏻‍🍳</h1>
     <Button
     type='button'
     label={'ADD RECIPE'}
     bg={'hsl(197, 100%, 45%)'}
     color={'black'}
     maxWidth={'200px'}
     fontSize={'1.5rem'}
     onClick={addRecipe}
     />
    </div>
  )
}

export default Header