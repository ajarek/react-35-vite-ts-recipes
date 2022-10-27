import { createContext, useContext, useState } from 'react'
import  Form from './components/Form/Form'
import Header from './components/Header/Header'
export type GlobalContent = {
  newRecipe: boolean
  setNewRecipe:(c: boolean) => void
}

export const AppContext = createContext<GlobalContent>({
  newRecipe: false, // set a default value
  setNewRecipe: () => {},
  })
  export const useGlobalContext = () => useContext(AppContext)

  function App() {
  const [newRecipe, setNewRecipe] = useState(false)
  return (
    <AppContext.Provider value={{newRecipe,setNewRecipe}}>
    <div className='App'>
      <Header 
      addRecipe={()=>setNewRecipe(true)}
      />
      {newRecipe ?
      <Form
      closeForm={(e)=>{
        const target = e.target as HTMLTextAreaElement
       if(target.className==='container-form')
        {setNewRecipe(false)}
      }}
      />
      :null}
      
    </div>
    </AppContext.Provider>
  )
}

export default App
