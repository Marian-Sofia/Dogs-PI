import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate()



    return (
        <>
            <h1>Landing Page</h1>
            <button onClick={() => navigate('/home')}>Home</button>
        </>
    )
}

export default LandingPage;