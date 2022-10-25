import  Form from './components/Form/Form'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='App'>
      <Header 
      addRecipe={()=>console.log('ADD RECIPE')}
      />
      <Form/>
    </div>
  )
}

export default App
