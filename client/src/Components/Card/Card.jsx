import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, temperaments }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/detail/${id}`)}>
            <h1>{name}</h1>
            <img src={image}/>
            { temperaments.map( (value, i) => <h2 key={i}>{ value.name }</h2>)}
        </div>
    )
}

export default Card