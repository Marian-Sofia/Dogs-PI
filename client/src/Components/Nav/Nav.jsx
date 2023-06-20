import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
// import { useDispatch } from "react-redux";
// import { getDogs } from "../../Redux/actions";
// import { TiRefresh } from 'react-icons/ti'
import style from './Nav.module.css'

const Nav = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    // const refresh = () => {
    //     dispatch(getDogs())
    // }

    return (
        <div className={style.contain}>
            <h2 className={style.emoji}>🐕</h2>
            <h3 className={style.title}>GOOD DOGGIES </h3>
            <div className={style.btn} onClick={() => navigate('/home')}>Home</div>
            {/* <button className={style.btn} onClick={() => refresh()}> <TiRefresh/> </button> */}
            <div className={style.btn} onClick={() => navigate('/create')}>Create</div>

            <SearchBar/>
        </div>
    )
}

export default Nav;