import { useSelector } from "react-redux";
import { CardContainer } from '../index'
import style from './Search.module.css'

const Search = () => {
    const dogsName = useSelector(state => state.dogsName)

    return (
        <div className={style.contain}>
            <h1 className={style.title}>Is this the doggy you are looking for?</h1>
            {dogsName.length >= 1 ? <CardContainer state={dogsName}/> : <h1 className={style.loading}>Loading...</h1>}
        </div>
    )

}

export default Search;