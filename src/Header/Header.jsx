import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './Header.css'

Link
const Header = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>

            <div className="nav-container">
                <button><NavLink to={`/`}>Home</NavLink></button>
                <button><NavLink to={`/contact`}>Contact</NavLink></button>
                <button> <NavLink to={`/about`}>About</NavLink></button>
                <button> <NavLink to={`/users`}>Users</NavLink></button>
                <button> <NavLink to={`/posts`}>Posts</NavLink></button>

                {/* <Link className={'mr'} to={'/'}>Home</Link>
                <Link className={'mr'} to={'/contact'}>Contact</Link>
                <Link className={'mr'} to={'/about'}>About</Link>
                <Link className={'mr'} to={'/users'}>Users</Link>
                <Link className={'mr'} to={'/posts'}>Posts</Link> */}

            </div>
        </div>
    );
};

export default Header;