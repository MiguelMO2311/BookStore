
const Menu = () => {
    return (
        <nav className="flex justify-between p-4 w-4/5" >
            <div className="flex justify-start">
                <a className="ml-8 text-blue-700 " href="/HomePage">Home</a>
                <a className="ml-8" href="/BooksPage">Books</a>
            </div>
            <a className="text-black" href="/Login">Log In</a>
        </nav>
    );
};

export default Menu;
