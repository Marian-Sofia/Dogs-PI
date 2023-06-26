import { Routes, Route, useLocation } from 'react-router-dom'
import { LandingPage, Home, Form, Detail, Search, Nav, Loading, NotFound } from './Components/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { 
    getDogs, 
    getTemperaments } 
from './Redux/actions'
import './App.css'

function App() {
  const location = useLocation().pathname
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getDogs())
    dispatch(getTemperaments())
}, [dispatch])

  return (
    <div>
      {location === '/' ? '' : <Nav/>}
      
      <Routes>

        <Route path='*' element={<NotFound/>}/>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/create' element={<Form/>}/>
        <Route path='/edit/:id' element={<Form/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>

      </Routes>
    </div>
  )

}

export default App
