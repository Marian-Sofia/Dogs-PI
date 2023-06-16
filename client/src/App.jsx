import { Routes, Route, useLocation } from 'react-router-dom'
import { LandingPage, Home, Form, Detail } from './Components/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { 
    getDogs, 
    getTemperaments } 
from './Redux/actions'
import Nav from './Components/Nav/Nav'
import Search from './Components/Search/Search'

function App() {
  const location = useLocation().pathname
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getDogs())
    dispatch(getTemperaments())
}, [])

  return (
    <div>
      {location === '/' ? '' : <Nav/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/create' element={<Form/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )

}

export default App
