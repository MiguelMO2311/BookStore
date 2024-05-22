import Logo from "./logo";
import Menu from "./menu";


const Header = () => {
    return (
        <>
        <header className="flex justify-between max-h-30 p-3 bg-lime-600">
           <Logo/> <Menu/>
        </header>
        </>
    );
};

export default Header;

