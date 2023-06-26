import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardContainer, Loading, Paged } from '../index'
import { reset } from '../../Redux/actions'
import style from './Search.module.css'

const Search = () => {
    const dispatch = useDispatch()
    const dogsName = useSelector(state => state.dogsName)

    useEffect(() => {
        return () => {
            dispatch(reset())
        }
    }, [])
    
    const [page, setPage] = useState(1);
    const [items, setItems] = useState(8);
    const max = dogsName.length / items;

    return (
        <div className={style.contain}>
            {dogsName.error ? <div className={style.error}>the searched dog was not found</div> : ''}

            {dogsName.length >= 1 
            ? <div>
                <h1 className={style.title}>Is this the doggy you are looking for?</h1>
                <CardContainer page={page} items={items} state={dogsName}/>
                <Paged page={page} setPage={setPage} max={max} />
            </div> 
            : dogsName.error ? '' : <Loading/>}

        </div>
    )

}

export default Search;