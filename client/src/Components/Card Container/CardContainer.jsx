import { useLocation } from "react-router-dom";
import { Card } from "../index";

const CardContainer = ({ state, page, items }) => {
    const location = useLocation().pathname

    return (
        <div>
            {location === '/search' ?  
            state.map(({ id, name, temperaments, image }) => {
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