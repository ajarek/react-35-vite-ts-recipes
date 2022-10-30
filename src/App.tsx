import React, { createContext, useContext, useRef, useState } from 'react'
import Button from './components/Button/Button'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

export type GlobalContent = {
  newRecipe: boolean
  setNewRecipe: (c: boolean) => void
  isSubmit: boolean
  setIsSubmit: (c: boolean) => void
  title: string
  setTitle: (c: string) => void
  description: string
  setDescription: (c: string) => void
  inputFields: any
  setInputFields: (c: any) => void
  inputFieldsStep: any
  setInputFieldsStep: (c: any) => void
  arrayRecipe: any
  setArrayRecipe: (c: any) => void
}

export const AppContext = createContext<GlobalContent>({
  newRecipe: false, // set a default value
  setNewRecipe: () => {},
  isSubmit: false,
  setIsSubmit: () => {},
  title: '',
  setTitle: () => {},
  description: '',
  setDescription: () => {},
  inputFields: [{ name: '' }],
  setInputFields: () => {},
  inputFieldsStep: [{ name: '' }],
  setInputFieldsStep: () => {},
  arrayRecipe: [],
  setArrayRecipe: (c: any) => {},
})
export const useGlobalContext = () => useContext(AppContext)

interface ABC {
  title: string
  desc: string
  name: string
  inFi: []
  inFS: []
}

function App() {
  const [newRecipe, setNewRecipe] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [inputFields, setInputFields] = useState([{ name: '' }])
  const [inputFieldsStep, setInputFieldsStep] = useState([{ name: '' }])
  const [arrayRecipe, setArrayRecipe] = useState([])


  const deleteRecipe = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLTextAreaElement
    const element = target.closest('.result')
    element?.remove()
  }
  const viewMoreRecipe = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLTextAreaElement
    // const fragment = target.parentElement?.parentElement?.previousElementSibling?.children[2]
    const fragment= target.closest('.result')?.querySelector('.row')
    fragment?.classList.toggle('none')
  }

  return (
    <AppContext.Provider
      value={{
        newRecipe,
        setNewRecipe,
        isSubmit,
        setIsSubmit,
        title,
        setTitle,
        description,
        setDescription,
        inputFields,
        setInputFields,
        inputFieldsStep,
        setInputFieldsStep,
        arrayRecipe,
        setArrayRecipe,
      }}
    >
      <div className='App'>
        <Header addRecipe={() => setNewRecipe(true)} />
        {newRecipe ? (
          <Form
            closeForm={(e) => {
              const target = e.target as HTMLTextAreaElement
              if (target.className === 'container-form') {
                setNewRecipe(false)
              }
            }}
          />
        ) : null}
        <div className='wrapper'>
          {isSubmit
            ? arrayRecipe &&
              arrayRecipe.flat(Infinity).map((el: ABC, index: number) => {
                return (
                  <div
                    className={'result'}
                    key={index}
                  >
                    <div className={'info'}>
                      <h4>{el.title}</h4>
                      <p>{el.desc}</p>
                    
                    <div
                      className={'row'}
                      id={String(index)}
                    > <h5>Ingredients:</h5>
                      {el.inFi.map((e: ABC, i: number) => (
                        <p key={i}>{e.name}</p>
                      ))}
                      <h5>Steps:</h5>
                      {el.inFS.map((e: ABC, i: number) => (
                        <p key={i}>{e.name}</p>
                      ))}
                    </div>
                    </div>
                    <div className={'layout'}>
                      <Button
                        type='submit'
                        label={'VIEW MORE'}
                        bg='hsl(197, 100%, 45%)'
                        color='black'
                        maxWidth='135px'
                        fontSize='0.7rem'
                        onClick={(e) => viewMoreRecipe(e)}
                      />
                      <Button
                        type='submit'
                        label={'REMOVE RECIPE'}
                        bg='hsl(350, 96%, 43%)'
                        color='#fff'
                        maxWidth='135px'
                        fontSize='0.7rem'
                        onClick={(e) => deleteRecipe(e)}
                      />
                    </div>
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
