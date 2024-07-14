import { Link } from 'react-router-dom';
import './CSS/Navbar.css';



const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                <Link to='/Home'>// Home</Link>
                </li>
                <li>
                <Link to='/Projects'>// Projects</Link>
                </li>
                <li>
                <Link to="/Resume">// Resume</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;

