
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <>
        <div id="nav1">
            
            <nav>
                <Link to="/"> |Home</Link>
                <Link to="/About"> |About</Link>
                <Link to="/Contact"> |Contact</Link>
                <Link to="/Gallary"> |Gallary</Link>
            </nav>
        </div>
   </> );
}

export default Navbar;