import { Routes, Route } from 'react-router-dom'
import { LandingPage, Home, Form, Detail } from './Components'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { 
    getDogs, 
    getTemperaments } 
from './Redux/actions'

function App() {
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(getDogs())
    dispatch(getTemperaments())
}, [])

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
