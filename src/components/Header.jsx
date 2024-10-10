// assets
import star from "../assets/star_main.png";

const Header = () => {
  return (
    <header className="h-[95vh] flex items-center justify-center">
      <div className="">
        <div className="relative flex items-center justify-center">
          <h1 className="made-bold text-[#231F20] text-[4rem] md:text-[7rem] lg:text-[8vw]">
            Gabrielle
          </h1>
          <img
            src={star}
            alt=""
            className="-z-10 absolute top-0 right-0 translate-x-[1rem] translate-y-[-3rem] scale-75  md:translate-y-[-1.5rem] lg:translate-x-[4vw] lg:translate-y-[-1vw] lg:scale-100 lg:w-[10vw]"
          />
        </div>
        <div>
          <div className="translate-y-[-.5rem] mx-10 gap-4 flex items-center justify-center flex-wrap md:translate-y-[-2rem] lg:gap-[1vw] lg:mx-0 lg:translate-y-[-2.5vw]">
            <span className="made-medium text-[#231F20] rounded-[.6rem] px-[.6rem] py-[.05rem] border-[1px] border-solid border-[#231f2093] lg:px-[.8vw] lg:py-[.2vw] lg:rounded-[.8vw] lg:text-[1.1vw]">
              video editor
            </span>

            <span className="made-medium text-[#231F20] rounded-[.6rem] px-[.6rem] py-[.05rem] border-[1px] border-solid border-[#231f2093] lg:px-[.8vw] lg:py-[.2vw] lg:rounded-[.8vw] lg:text-[1.1vw]">
              art direction
            </span>

            <span className="made-medium text-[#231F20] rounded-[.6rem] px-[.6rem] py-[.05rem] border-[1px] border-solid border-[#231f2093] lg:px-[.8vw] lg:py-[.2vw] lg:rounded-[.8vw] lg:text-[1.1vw]">
              photography
            </span>

            <span className="made-medium text-[#231F20] rounded-[.6rem] px-[.6rem] py-[.05rem] border-[1px] border-solid border-[#231f2093] lg:px-[.8vw] lg:py-[.2vw] lg:rounded-[.8vw] lg:text-[1.1vw]">
              motion graphic
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
