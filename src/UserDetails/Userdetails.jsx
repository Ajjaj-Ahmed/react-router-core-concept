import { useLoaderData, useNavigate } from "react-router-dom";


const Userdetails = () => {

    const user = useLoaderData()

    const { email, phone, name } = user;

    console.log(user)

    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(-1)
    }
    const singleUser = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={singleUser}>
            <h2>{name}</h2>
            <h2>{phone}</h2>
            <h2>{email}</h2>
            <button onClick={handleNavigate}>
                Users List
            </button>
        </div>
    );
};

export default Userdetails;