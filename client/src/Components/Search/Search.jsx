import { useSelector } from "react-redux";
import { CardContainer } from '../index'

const Search = () => {
    const dogsName = useSelector(state => state.dogsName)

    return (
        <div>
            <h1>Search</h1>
            {dogsName.length >= 1 ? <CardContainer state={dogsName}/> : <h1>Loading...</h1>}
        </div>
    )

}

export default Search;