import Logo from "./logo";
import Menu from "./menu";


const Header = () => {
    return (
        <>
        <header className="flex justify-evenly max-h-30 p-3 bg-emerald-700 text-amber-50 font-semibold">
           <Logo/>
           <Menu/>
        </header>
        </>
    );
};

export default Header;

