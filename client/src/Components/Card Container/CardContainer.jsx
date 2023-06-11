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
            <h1>Card Container</h1>
        </div>
    )
}

export default CardContainer