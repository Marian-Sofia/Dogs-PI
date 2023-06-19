import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteDogs, detailDogs } from "../../Redux/actions";
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin2Fill } from 'react-icons/ri'

const Detail = () => {
    const dogs = useSelector( state => state.detailDogs )
    
    const navigate = useNavigate()

    const id = useParams().id
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailDogs(id))
    },[])

    const handleDelete = () => {
        dispatch(deleteDogs(id))
        navigate('/home')
    }

    return (
        <div>
            <h1>Details</h1>
        { typeof(dogs.id) === 'string' ? <button onClick={() => navigate(`/edit/${dogs.id}`)}> <AiFillEdit/> </button> : '' }
        { typeof(dogs.id) === 'string' ? <button onClick={handleDelete}> <RiDeleteBin2Fill/> </button> : '' }
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