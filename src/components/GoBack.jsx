import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <div
      className="z-[100000000] fixed top-6 left-6 lg:top-[2vw] lg:left-[2vw] "
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <button className="goback flex items-center justify-center transition-all duration-[0.3s] ease-[ease-in-out] helv-medium text-[3rem] text-[#FDF9EC] bg-[#231F20] rounded-full scale-[.90] p-4 w-12 h-12 lg:p-[1vw] lg:text-[3vw] lg:w-[3.5vw] lg:h-[3.5vw]  hover:scale-100 ">
        <Link to={"/"}>
          <div className="flex flex-col gap-[.4rem]">
            <span className="child-1 transition-all duration-[0.3s] ease-[ease-in-out] block w-[1.1rem] h-[.15rem] lg:w-[1.2vw] lg:h-[.15vw]  bg-[#FDF9EC]"></span>
            <span className="child-3 transition-all duration-[0.3s] ease-[ease-in-out] block w-[1.1rem] h-[.15rem] lg:w-[1.2vw] lg:h-[.15vw]  bg-[#FDF9EC]"></span>
          </div>
        </Link>
      </button>
      <div></div>
    </div>
  );
};

export default GoBack;
