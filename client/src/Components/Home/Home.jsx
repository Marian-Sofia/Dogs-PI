import { useEffect, useState } from 'react';
import { CardContainer } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../Redux/actions';
import { Paged } from '../index';
// import style from './Home.module.css'

const Home = () => {
    const dogs = useSelector(state => state.dogs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogs())
    }, [])


    const [page, setPage] = useState(1)
    const [items, setItems] = useState(8)
    const max = dogs.length / items



    return (
        <div>
            { dogs.length ? <CardContainer page={page} items={items} state={dogs}/> : <h1>Loading...</h1>}
            <Paged page={page} setPage={setPage} max={max}/>
        </div>
    )
}

export default Home