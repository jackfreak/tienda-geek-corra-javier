import './Header.scss';
import { NavBar } from "../NavBar/NavBar";
//import { SearchBar } from "../SearchBar/SearchBar";


const Header = () => {

    return (
        <header className="main-header">
            <NavBar />
            { /* <SearchBar /> */} 
        </header>
    );
}

export {
    Header,
}