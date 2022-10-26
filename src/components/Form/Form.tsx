import { useState } from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'
import './Form.css'
const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [inputFields, setInputFields] = useState([{ name: '' }])
  const [isSubmit, setIsSubmit] =useState(false)
  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data: any = [...inputFields]
    data[index][event.target.name] = event.target.value
    setInputFields(data)
  }

  const addFields = () => {
    let newfield = { name: '', age: '' }
    setInputFields([...inputFields, newfield])
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmit(!isSubmit)
  }

  return (
    <>
    <form onSubmit={onSubmitHandler}>
      <Label title={'Title'} />
      <Input
        name={'title'}
        type={'text'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label title={'Description'} />
      <Input
        name={'description'}
        type={'text'}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Label title={'Ingredients'} />
      {inputFields.map((input, index) => {
        return (
          <Input
            key={index}
            type={'text'}
            name='name'
            value={input.name}
            onChange={(event) => handleFormChange(index, event)}
          />
        )
      })}
      <Button
      type='button' 
      label={' Add More..'}
      bg='green'
      color='white'
      onClick={addFields}
      />
       
        
      <Button
       type='submit'
        label={' Add More..'}
      bg='orange'
      color='black'
      onClick={e=>(e)}
      />
    </form>
    {isSubmit?
     <div 
     className="result"
     style={{color: 'white'}}
     >
      
    
      <h3>{title}</h3>
      <p>{description}</p>
      {inputFields.map((input,index) => {
      return(
        <p key={index}>{input.name}</p>
      )
      })}
      
     </div>
     :null
     }
     </>
  )
}

export default Form
