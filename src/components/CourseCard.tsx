const CourseCard = () => {
  return (
    <article className="rounded-md bg-slate-200 drop-shadow-md w-72 cursor-pointer hover:">
      <div className="p-4">
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:700/1*9ldWBjIm_36mNyNvJNCJgA.png"
            alt="Javascript"
          />
        </div>
        <div className="flex justify-between my-3">
          <div>
            <span>1M Students</span>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
          </div>
        </div>
        <h3 className="font-semibold">The Complete Course Javascript Course 2024: From Zero to Expert!</h3>
        <div className="my-2">
          <span className="font-light text-xs">Web development</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs">
            By <span className="font-medium">Jonas Schmedtmann</span>
          </p>
          <i className="fa-solid fa-cart-plus ml-14 cursor-pointer"></i>
          <span>$20</span>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
