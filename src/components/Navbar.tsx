const Navbar = () => {
  return (
    <>
      <div className="flex items-center w-1/2">
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-amber-600 text-2xl h-16 cursor-pointer mr-4 w-16 hover:bg-amber-700">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="w-40 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/FPT_Education_logo.svg/2560px-FPT_Education_logo.svg.png"
              alt=""
            />
          </div>
          <div className="flex items-center relative w-96 ml-16 max-lg:hidden">
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Search for courses, tutorials..."
              className="rounded-md h-8 text-xs pl-8"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-2 pointer-events-none"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-1/2">
        <div className="cursor-pointer text-xl mx-3">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <button className="rounded-xl border-amber-600 bg-amber-600 h-12 w-24 leading-10 hover:bg-amber-700">
          Sign in
        </button>
        <button className="rounded-xl border-slate-400 bg-gray-300 hover:bg-gray-400 h-12 w-24 leading-10 mx-3">
          Sign up
        </button>
      </div>
    </>
  );
};

export default Navbar;
