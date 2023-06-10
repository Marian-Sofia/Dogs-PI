import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../../Redux/actions'
import { CardContainer } from '../index'


const Home = () => {
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogs)

    useEffect(() => {
        dispatch(getDogs())
    }, [])

    return (
        <div>
            <h1>Home</h1>
            { dogs.length ? <CardContainer state={dogs}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default Home