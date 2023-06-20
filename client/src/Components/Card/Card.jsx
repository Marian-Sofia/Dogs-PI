import { useNavigate } from "react-router-dom";
import style from './Card.module.css'

const Card = ({ id, name, image, temperaments }) => {
    const navigate = useNavigate()

    return (
        <div className={style.contain} onClick={() => navigate(`/detail/${id}`)}>
            <h1 className={style.name}>{name}</h1>
            <img className={style.img} src={image}/>
            <h3 className={style.h3}>Temperaments: </h3>
            <div className={style.containTemps}>
                { temperaments.map( (value, i) => <h2 className={style.temperaments} key={i}>✨{ value.name }</h2>)}
            </div>
        </div>
    )
}

export default Card