import { CSSProperties } from "react";

const Footer = (props: { style: CSSProperties | undefined; }) => {
    const footerStyles: CSSProperties = {
        display: 'flex',
        justifyItems:'center',
        justifyContent: 'space-between', 
        ...props.style 
    };

    return (
        <footer style={footerStyles}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </footer>
    );
};

export default Footer;
