import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { detailDogs } from "../../Redux/actions";

const Detail = () => {
    const dogs = useSelector( state => state.detailDogs )

    const id = useParams().id
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailDogs(id))
    },[])

    return (
        <div>
        <h3>ID: {dogs.id}</h3>
        <img src={dogs.image}/>
        <h3>Name: {dogs.name}</h3>
        <h3>Height: {dogs.height}</h3>
        <h3>Weight: {dogs.weight}</h3>
        <div>
        <h3>Temperaments: </h3>
        {dogs.temperaments?.map(( temp, i) => <h3 key={i}>{temp.name}</h3> )}
        </div>
        <h3>Life Span: {dogs.life_span}</h3>
        </div>
    )
}

export default Detail;