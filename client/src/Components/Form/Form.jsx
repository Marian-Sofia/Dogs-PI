import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import handleError from '../Validations';
import { postDogs } from '../../Redux/actions';

const Form = () => {
    const temperament = useSelector(state => state.temperaments)
    const dispatch = useDispatch()

    const [error, setError] = useState({
        name: '',
        height: '',
        weight: '',
        life_span: '',
        image: ''
    })

    const [dog, setDog] = useState({
        name: '',
        height: 0,
        weight: 0,
        life_span: 0,
        image: '',
        temperament: []
    })
    
    const handlerTemps = (event) => {
        event.preventDefault();
        const find = dog.temperament?.find(value => value === event.target.innerText)

        if(find) return
        
        setDog({...dog, temperament: [...dog.temperament, event.target.innerText]})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dog);
        dispatch(postDogs(dog))
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
            <h1>Creation Form</h1>

                <label>Name: 
                    <input 
                    placeholder='Name' 
                    onChange={handleChange} 
                    name="name"/>
                </label>
                {error.name && <span>{error.name}</span>}

                <label>Height: 
                    <input  
                    placeholder='Height (min - max)' 
                    onChange={handleChange} 
                    name="height"/>
                </label>
                {error.height && <span>{error.height}</span>}

                <label>Weight: 
                    <input 
                    placeholder='Weight (min - max)' 
                    onChange={handleChange} 
                    name="weight"/>
                </label>
                {error.weight && <span>{error.weight}</span>}

                <label>Life Span: 
                    <input
                    placeholder='Life span (min - max)' 
                    onChange={handleChange} 
                    name="life_span"/>
                </label>
                {error.life_span && <span>{error.life_span}</span>}

                <label>Image: 
                    <input 
                    placeholder='Url' 
                    onChange={handleChange} 
                    name="image"/>
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
                    {dog.temperament.length < 1 ? 
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

                <button>Create</button>

            </form>

            

        </div>
    )
}

export default Form;