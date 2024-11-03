import { Link } from "react-router-dom";
import './Header.css'

Link
const Header = () => {
    return (
        <div>
            <h2>This is navbar</h2>
            <ul>
                <Link className={'mr'} to={'/'}>Home</Link>
                <Link className={'mr'} to={'/contact'}>Contact</Link>
                <Link className={'mr'} to={'/about'}>About</Link>
                <Link className={'mr'} to={'/users'}>Users</Link>
                <Link className={'mr'} to={'/posts'}>Posts</Link>
              
            </ul>
        </div>
    );
};

export default Header;