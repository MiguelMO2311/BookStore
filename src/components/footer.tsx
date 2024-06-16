
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoAmazon } from "react-icons/io5";


const Footer = () => {


    return (
        <footer className="flex justify-around min-h-full p-8 bg-green-800  text-white font-semibold">
            <a className="text-4xl hover:bg-green-700" href="https://www.linkedin.com/in/miguel-meneses-oliveros" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
            <a className="text-4xl hover:bg-green-700" href="https://www.x.com" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare /></a>
            <a className="text-4xl hover:bg-green-700" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a className="text-4xl hover:bg-green-700" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebookSquare /></a>
            <a className="text-4xl hover:bg-green-700" href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"><IoLogoAmazon /></a>
        </footer>
    );
};

export default Footer;