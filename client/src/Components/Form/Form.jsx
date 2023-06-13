import { useState } from 'react';
import { useSelector } from 'react-redux'

const Form = () => {
    const temperament = useSelector(state => state.temperaments)

    const [temp, setTemp] = useState([])
    
    const handlerTemps = (event) => {
        event.preventDefault();
        const find = temp.find( value => value === event.target.innerText)
        if(find) return
        setTemp([...temp, event.target.innerText])
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const deleteTemp = (event) => {
        const filter = temp.filter( value => value !== event.target.innerText)
        setTemp(filter)
    }

    return (
        <div>
            <h1>Creation Form</h1>
            <form onClick={handleSubmit}>
                <label>Name: <input placeholder='Name' type="text" name="name"/></label>
                <label>Height: <input placeholder='Height' type="text" name="height"/></label>
                <label>Weight: <input placeholder='Weight' type="text" name="weight"/></label>
                <label>Life Span: <input placeholder='Life Span' type="text" name="life span"/></label>

                <div>
                    <h1>Temperaments</h1>
                    {temperament?.map((temp, i) => <button key={i} onClick={handlerTemps}>{temp.name}</button>)}
                </div>

                <h1>Selected Temperaments</h1>

                <div>
                    {temp?.map((temp, i) => <button onClick={deleteTemp} key={i}>{temp}</button>)}
                </div>

                <button>Create</button>

            </form>

        </div>
    )
}

export default Form;