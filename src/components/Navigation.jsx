import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="main-nave">
            <ul className="columns">
                <li><Link to="/" Home></Link></li>
                <li><Link to="/" About></Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;