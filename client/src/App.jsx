import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { 
  detailDogs, 
  getDogs, 
  getTemperaments 
} from "./Redux/actions"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
    dispatch(detailDogs())
    dispatch(getTemperaments())
  }, [])


  return (
    <>
      <h1>Hola</h1>
    </>
  )
}

export default App
