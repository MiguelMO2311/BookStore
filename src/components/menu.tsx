import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
