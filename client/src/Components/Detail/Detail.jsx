import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { detailDogs } from "../../Redux/actions";

const Detail = () => {
    const dogs = useSelector( state => state.detailDogs )
    console.log(dogs);
    const id = useParams().id
    console.log(id);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailDogs(id))
    },[])

    return (
        <>
        <h3>ID: {dogs.id}</h3>
        <h3>{``}</h3>
        <h3>Name: {dogs.name}</h3>
        <h3>Height: {dogs.height}</h3>
        <h3>Weight: {dogs.weight}</h3>
        <h3>Temperaments: {}</h3>
        <h3>Life Span: {dogs.life_span}</h3>
        </>
    )
}

export default Detail;