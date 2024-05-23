function Logo() {
  return (
    <div className="flex  start-2 justify-start w-full px-4 items-center h-20">
      <img src="/imgs/logo.png" alt="logo" width={100} height={30}/>
      <div className="text-3xl font-extrabold text-amber-400 hover:text-black">
        <h1>BookStore!</h1>
      </div>
    </div>
  )
}

export default Logo;
