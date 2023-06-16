import { useState } from "react";
import { useDispatch } from "react-redux";
import { dogsName, getDogs } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import { BsSearchHeart } from 'react-icons/bs'

const SearchBar = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = (event) => {
        setName(event.target.value)
    }

    const onSearch = (name) => {
        if(name === '') return
        dispatch(dogsName(name))
        navigate('/search')
        setName('')
    }

    return(
        <>
            <input placeholder="Search" onChange={handleSearch} value={name}/>
            <button onClick={() => onSearch(name)}> <BsSearchHeart/> </button>
        </>
    )
}

export default SearchBar;