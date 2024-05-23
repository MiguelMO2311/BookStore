import Logo from "./logo";
import Menu from "./menu";


const Header = () => {
    return (
        <>
        <header className="flex justify-evenly max-h-30 p-3 bg-green-200 text-yellow-500 font-semibold">
           <Logo/>
           <Menu/>
        </header>
        </>
    );
};

export default Header;

