import { Routes, Route } from 'react-router-dom'
import { LandingPage, Home, Form, Detail } from './Components'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Form/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )

}

export default App
