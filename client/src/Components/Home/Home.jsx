import { CardContainer } from '../index';
import { useSelector } from 'react-redux';

const Home = () => {
    const dogs = useSelector(state => state.dogs)

    return (
        <div>
            <h1>Home</h1>
            { dogs.length ? <CardContainer state={dogs}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default Home