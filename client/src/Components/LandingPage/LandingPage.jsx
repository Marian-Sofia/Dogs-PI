import { useNavigate } from "react-router-dom";
import style from './Landing.module.css'

const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <div className={style.background}>
            <div className={style.contain}>
                <h1 className={style.title}> WELCOME DOGGIES 💌</h1>
                <button className={style.btn} onClick={() => navigate('/home')}> 🐶 </button>
            </div>
        </div>
    )
}

export default LandingPage;