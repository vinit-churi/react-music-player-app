import leftArrowIcon from "@/assets/icons/left-arrow.png";
import rightArrowIcon from "@/assets/icons/right-arrow.png";
const NavHistoryRouter = () => {
  return (
    <div className="flex-[0_0_110px] flex gap-[10px] items-center justify-center">
      <button
        role="button"
        aria-label="go back to previous page"
        className="border-[2px] border-slate-700 border-solid rounded-full w-max h-max"
      >
        <img
          src={leftArrowIcon}
          alt="go back"
          className="p-2 w-[30px] h-auto"
        />
      </button>
      <button
        role="button"
        aria-label="go back to next page"
        className="border-[2px] border-slate-700 border-solid rounded-full w-max h-max"
      >
        <img
          src={rightArrowIcon}
          alt="go forward"
          className="p-2 w-[30px] h-auto"
        />
      </button>
    </div>
  );
};

export default NavHistoryRouter;
