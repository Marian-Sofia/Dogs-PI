import { Card } from "../index";

const CardContainer = ({ state }) => {
    return (
        <div>
            {state?.map( ({ id, name, temperaments, image }) => {
                return <Card
                    key={id}
                    id={id}
                    name={name}
                    temperaments={temperaments}
                    image={image}
                />}
            )}
        </div>
    )
}

export default CardContainer