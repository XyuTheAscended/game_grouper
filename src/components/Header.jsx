import "../css/Header.css";
import Navigation from "./Navigation"
const Header = () => {
    return(
        <header id = "main-header">
            <h1>Finding the perfect game</h1>
            <Navigation/>
        </header>
    );
};

export default Header;