import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './User.css'

const Users = () => {
    const users = useLoaderData();
    
    // console.log(users)
    return (
        <div className={'userContainer'}>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;