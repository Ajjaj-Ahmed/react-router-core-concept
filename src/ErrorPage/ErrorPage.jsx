import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)

    const navigate = useNavigate()

    const handleError=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>{error.status}</h1>
           <h2>{error.statusText}</h2>
           <button onClick={handleError}>
                Back
           </button>
        </div>
    );
};

export default ErrorPage;