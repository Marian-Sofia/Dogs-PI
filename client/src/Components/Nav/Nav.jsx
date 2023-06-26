import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'

const Nav = () => {
    const navigate = useNavigate()

    return (
        <div className={style.contain}>
            <h2 className={style.emoji}>🐕</h2>
            <h3 className={style.title}>GOOD DOGGIES </h3>
            <div className={style.btn} onClick={() => navigate('/home')}>Home</div>
            <div className={style.btn} onClick={() => navigate('/create')}>Create</div>

            <SearchBar/>
        </div>
    )
}

export default Nav;