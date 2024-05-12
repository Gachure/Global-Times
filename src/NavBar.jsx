import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/latest">Latest News</Link></li>
      <li><Link to="/add">Add News</Link></li>
    </ul>
  </nav>
);

export default NavBar;
