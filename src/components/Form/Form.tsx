import { useState } from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import './Form.css'
const Form = () => {
  const [title, setTitle]= useState('')
  const onSubmitHandler =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('title 👉️', title);
  }
  
  return (
    <form onSubmit={onSubmitHandler}>
     
      <Label
      title={'Title'}
      />
      <Input
      type={'text'}
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
