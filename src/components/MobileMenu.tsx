type MobileMenuProps = {
    isOpen: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
            <nav className="mt-20 px-4 text-xl">
                <a className="ml-8 text-blue-700 hover:text-blue-400" href="/HomePage">Home</a>
                <a className="ml-8 text-red-700 hover:text-red-400" href="/BooksPage">Books</a>
                <a className=" space-x-8 ml-10 text-white hover:text-black px-1 py-2 border-2 border-green-100 rounded hover:bg-yellow-500"
                    href="/Login">Log In</a>
            </nav>
        </div>
    );
};

export default MobileMenu;
