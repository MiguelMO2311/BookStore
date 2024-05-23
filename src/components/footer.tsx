import { AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {


    return (
        <footer className="flex justify-around min-h-full p-8 bg-green-200  text-black font-semibold">
            <a className="text-4xl" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
            <a className="text-4xl" href="https://www.x.com" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare /></a>
            <a className="text-4xl" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
        </footer>
    );
};

export default Footer;