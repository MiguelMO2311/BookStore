import Logo from "./Logo";
import Menu from "./Menu";
import { CSSProperties } from 'react';

const Header = (props: { style: CSSProperties | undefined; }) => {

    
    return (
        <>
        <header style={props.style}>
           <Logo/>
           <Menu/>
        </header>
        </>
    );
};

export default Header;

