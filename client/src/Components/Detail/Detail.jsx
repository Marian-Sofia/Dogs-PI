import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteDogs, detailDogs } from "../../Redux/actions";
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import style from './Detail.module.css'

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
        <div className={style.contain}>

            <div className={style.containTitle}>
                <h1 className={style.title}>⭐ Details of the {dogs.name}</h1>
                
                <h2 className={style.id}>ID: {dogs.id}</h2>
            </div>

            { typeof(dogs.id) === 'string' ? 
                <div className={style.containBtn}>
                    <button className={style.btnEdit} onClick={() => navigate(`/edit/${dogs.id}`)}>
                        <AiFillEdit/> 
                    </button> 
                         
                    <button className={style.btnDelete} onClick={handleDelete}> 
                        <RiDeleteBin2Fill/> 
                    </button>
                </div> 
            : '' }

            <img className={style.img} src={dogs.image}/>

            <div className={style.containExtra}>
                <h2 className={style.height}>Height: {dogs.height}</h2>
                <h2 className={style.weight}>Weight: {dogs.weight}</h2>
                <h2 className={style.life}>Life Span: {dogs.life_span}</h2>
            </div>


            <div className={style.containTemps}>
                <h2 className={style.temperaments}>Temperaments: </h2>
                {dogs.temperaments?.map(( temp, i) => 
                    <h3 className={style.temps} key={i}>{temp.name}</h3> 
                )}
            </div>

        </div>
    )
}

export default Detail;