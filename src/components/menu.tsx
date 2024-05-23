const Menu = () => {
    return (
        <nav className="ml-10 flex justify-between py-4 px-1 w-4/6 text-xl">
            <div className="flex justify-start">
                <a className="ml-8 text-blue-700 hover:text-blue-400" href="/HomePage">Home</a>
                <a className="ml-8 text-red-700 hover:text-red-400" href="/BooksPage">Books</a>
            </div>
            <a className="text-white hover:text-black px-1 py-2 border-2 border-green-100 rounded hover:bg-yellow-500"
             href="/Login">Log In</a>
        </nav>
    );
};

export default Menu;
