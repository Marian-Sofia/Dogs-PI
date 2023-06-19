import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import handleError from '../Validations';
import { detailDogs, postDogs, putDogs } from '../../Redux/actions';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Form = () => {
    const dispatch = useDispatch()
    const id = useParams().id
    const location = useLocation().pathname
    const navigate = useNavigate()
    
    if(location === `/edit/${id}`){
        useEffect(() => {
            dispatch(detailDogs(id))
        }, [])
    }
    
    const temperament = useSelector(state => state.temperaments)
    const dogsDetail = useSelector( state => state.detailDogs)

    const [dog, setDog] = useState({
        name: location === `/edit/${id}` ? dogsDetail.name : '',
        height: location === `/edit/${id}` ? dogsDetail.height : '',
        weight: location === `/edit/${id}` ? dogsDetail.weight : '',
        life_span: location === `/edit/${id}` ? dogsDetail.life_span : '',
        image: location === `/edit/${id}` ? dogsDetail.image : '',
        temperament: location === '/create' ? [] : dogsDetail.temperaments.map(temp => temp.name)
    })

    const [error, setError] = useState({
        name: '',
        height: '',
        weight: '',
        life_span: '',
        image: ''
    })

    
    const handlerTemps = (event) => {
        event.preventDefault();
        const find = dog.temperament?.find(value => value === event.target.innerText)

        if(find) return
        
        setDog({...dog, temperament: [...dog.temperament, event.target.innerText]})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(location === `/edit/${id}`){
            dog.id = id
            dispatch(putDogs(dog))
            setDog({
                id: '',
                name: '',
                height: '',
                weight: '',
                life_span: '',
                image: '',
                temperaments: [],
            })
            navigate(`/detail/${id}`)
            return
        }
        
        dispatch(postDogs(dog))
        setDog({
            name: '',
            height: '',
            weight: '',
            life_span: '',
            image: '',
            temperaments: [],
        })
        navigate('/home')
    }

    const deleteTemp = (event) => {
        const filter = dog.temperament?.filter( value => value !== event.target.innerText)

        setDog({...dog, temperament: filter})
    }

    const handleChange = (event) => {
        setDog({
            ...dog, 
            [event.target.name]: event.target.value
        })
        setError(handleError({
            ...dog,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Form</h1>

                <label>Name: 
                    <input 
                    placeholder='Name' 
                    onChange={handleChange} 
                    name="name"
                    autoComplete='off'
                    value={dog.name}/>
                </label>
                {error.name && <span>{error.name}</span>}

                <label>Height: 
                    <input  
                    placeholder='Height (min - max)' 
                    onChange={handleChange} 
                    name="height"
                    autoComplete='off'
                    value={dog.height}/>
                </label>
                {error.height && <span>{error.height}</span>}

                <label>Weight: 
                    <input 
                    placeholder='Weight (min - max)' 
                    onChange={handleChange} 
                    name="weight"
                    autoComplete='off'
                    value={dog.weight}/>
                </label>
                {error.weight && <span>{error.weight}</span>}

                <label>Life Span: 
                    <input
                    placeholder='Life span (min - max)' 
                    onChange={handleChange} 
                    name="life_span"
                    autoComplete='off'
                    value={dog.life_span}/>
                </label>
                {error.life_span && <span>{error.life_span}</span>}

                <label>Image: 
                    <input 
                    placeholder='Url' 
                    onChange={handleChange} 
                    name="image"
                    autoComplete='off'
                    value={dog.image}/>
                </label>
                {error.image && <span>{error.image}</span>}


                <div>
                    <h1>Temperaments</h1>
                    {temperament?.map((temp, i) => 
                    <div 
                    key={i} 
                    onClick={handlerTemps}
                    >{temp.name}</div>
                    )}
                </div>

                <div>
                    <h1>Selected Temperaments</h1>
                    {dog.temperament?.length < 1 ? 
                    <span>You should choose at least one temperament</span> : 
                    dog.temperament?.map((temp, i) => 
                    <div 
                    onClick={deleteTemp} 
                    key={i} 
                    >{temp}</div>
                    )}
                </div>

                <hr/>
                <br/>

                { location === `/edit/${id}` ? 
                <button>Edit</button> : 
                <button>Create</button>}

            </form>

            

        </div>
    )
}

export default Form;