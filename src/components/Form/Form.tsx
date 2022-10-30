import { useContext, useState } from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'
import './Form.css'
import { AppContext } from '../../App'

type Props = {
  closeForm: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Form = ({ closeForm }: Props) => {
  const {title, setTitle,description, setDescription, newRecipe, setNewRecipe, isSubmit,setIsSubmit,inputFields,setInputFields,inputFieldsStep, setInputFieldsStep,arrayRecipe, setArrayRecipe } = useContext(AppContext)
  
 

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data: any = [...inputFields]
    data[index][event.target.name] = event.target.value
    setInputFields(data)
  }
  const handleFormStep = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data: any = [...inputFieldsStep]
    data[index][event.target.name] = event.target.value
    setInputFieldsStep(data)
  }

  const addFields = () => {
    let newfield = { name: '' }
    setInputFields([...inputFields, newfield])
  }
  const addFieldsStep = () => {
    let newfield = { name: '' }
    setInputFieldsStep([...inputFieldsStep, newfield])
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewRecipe(false)
    setIsSubmit(true)
  }
  const addRecipe = ()=>{
   let recipe ={title:title,desc:description,inFi:inputFields,inFS:inputFieldsStep}
   setArrayRecipe([...arrayRecipe,recipe])
    
  }

  return (
    <div>
      <div
        className={'container-form'}
        onClick={closeForm}
      >
        <form
          className={'form'}
          onSubmit={onSubmitHandler}
        >
          <h2 className={'h2'}>Add a new recipe</h2>
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
          {inputFields.map((input: { name: string }, index:number) => {
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
            label={'ADD INGREDIENT'}
            bg='#5cc0eb'
            color='black'
            maxWidth=''
            fontSize='1rem'
            onClick={addFields}
          />

          <Label title={'Steps'} />
          {inputFieldsStep.map((input: { name: string }, index:number) => {
            return (
              <Input
                key={index}
                type={'text'}
                name='name'
                value={input.name}
                onChange={(event) => handleFormStep(index, event)}
              />
            )
          })}
          <Button
            type='button'
            label={'ADD STEP'}
            bg='#5cc0eb'
            color='black'
            maxWidth=''
            fontSize='1rem'
            onClick={addFieldsStep}
          />

          <Button
            type='submit'
            label={'SUBMIT'}
            bg='#5cc0eb'
            color='black'
            maxWidth=''
            fontSize='1rem'
            onClick={() =>addRecipe()}
          />
        </form>
      </div>

      
    </div>
  )
}

export default Form
