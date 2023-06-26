import { useLocation } from "react-router-dom";
import { Card } from "../index";
import style from './CardContainer.module.css'

const CardContainer = ({ state, page, items }) => {
    const location = useLocation().pathname


    return (
        <div className={style.contain}>
            {location === '/search' ?  
            state.slice(
                (page - 1) * items, (page - 1) * items + items
            ).map(({ id, name, temperaments, image }) => {
                return <Card
                    key={id}
                    id={id}
                    name={name}
                    temperaments={temperaments}
                    image={image}
                />
            }) : 
            state.slice(
                (page - 1) * items, (page - 1) * items + items
            ).map(({ id, name, temperaments, image }) => {
                return <Card
                    key={id}
                    id={id}
                    name={name}
                    temperaments={temperaments}
                    image={image}
                />
            })
            }
        </div>
    )
}

export default CardContainer