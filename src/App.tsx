import { createContext, useContext, useState } from 'react'
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
  arrayRecipe:[],
  setArrayRecipe: (c: any) => {},
})
export const useGlobalContext = () => useContext(AppContext)

interface ABC {
  title: string;
  desc: string;
  name: string;
  inFi:[]
  inFS:[]
}

function App() {
  const [newRecipe, setNewRecipe] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [inputFields, setInputFields] = useState([{ name: '' }])
  const [inputFieldsStep, setInputFieldsStep] = useState([{ name: '' }])
  const [arrayRecipe, setArrayRecipe] = useState([])

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
        {isSubmit
          ?
          
          
          arrayRecipe &&
            
             arrayRecipe.flat(Infinity).map((el:ABC,index,arr)=>{
              console.log(el);
              
             return(
              <div className={'result'} key={index} >
             <p>{el.title}</p>
             <p>{el.desc}</p>
             {el.inFi.map((e:ABC,i:number)=><p key={i}>{e.name}</p>)}
             {el.inFS.map((e:ABC,i:number)=><p key={i}>{e.name}</p>)}
              
             
             </div>
             )
            })
             
             
            
          : null}
      </div>
    </AppContext.Provider>
  )
}

export default App
