import { CardContainer } from '../index'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const Home = () => {
    const dogs = useSelector(state => state.dogs)
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate('/create')}>Creation Form</button>
            { dogs.length ? <CardContainer state={dogs}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default Home