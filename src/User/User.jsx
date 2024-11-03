import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, email, phone,id}=user;

    const userStyle ={
        border:'2px solid red',
        padding:'5px',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <button>
            <Link to={`/user/${id}`}>Show Details</Link>
            </button>
        </div>
    );
};

User.propTypes={
    user: PropTypes.object
}
export default User;