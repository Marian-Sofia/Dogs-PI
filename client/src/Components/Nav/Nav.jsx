import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getDogs } from "../../Redux/actions";
import { TiRefresh } from 'react-icons/ti'

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const refresh = () => {
        dispatch(getDogs())
    }

    return (
        <div>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => refresh()}> <TiRefresh/>  </button>
            <button onClick={() => navigate('/create')}>Create</button>

            <SearchBar/>
        </div>
    )
}

export default Nav;