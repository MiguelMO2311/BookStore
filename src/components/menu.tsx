type MenuProps = {
    className?: string;
    isOpenSidebar?: boolean;
};

const Menu: React.FC<MenuProps> = ({ className, isOpenSidebar }) => {
    return (
        <div className={className}>
            <nav className={`flex ${isOpenSidebar ? 'flex-col' : ''} justify-start items-center px-4 text-xl`}>
                <div className="flex justify-start">
                    <a className="ml-8 text-blue-700 hover:text-blue-400" href="/HomePage">Home</a>
                    <a className="ml-8 text-red-700 hover:text-red-400" href="/BooksPage">Books</a>
                </div>
                <a className=" space-x-8 ml-10 text-white hover:text-black px-1 py-2 border-2 border-green-100 rounded hover:bg-yellow-500"
                    href="/Login">Log In</a>
            </nav>
        </div>
    );
};

export default Menu;
