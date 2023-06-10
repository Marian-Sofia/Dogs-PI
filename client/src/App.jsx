import { Routes, Route } from 'react-router-dom'
import { LandingPage, Home, Form, Detail } from './Components'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Create' element={<Form/>}/>
        <Route path='/Detail' element={<Detail/>}/>
      </Routes>
    </div>
  )

}

export default App
