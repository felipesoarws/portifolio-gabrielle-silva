import { useEffect, useRef } from "react";
import { X } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";

const LetsWork = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const contactSection = useRef();

  const openContactSection = () => {
    if (contactSection.current.classList.contains("letswork-opened")) {
      contactSection.current.classList.remove("letswork-opened");
      document.body.classList.remove("no-scroll");
    } else {
      contactSection.current.classList.add("letswork-opened");
      document.body.classList.add("no-scroll");
    }
  };

  const closeContactSection = () => {
    contactSection.current.classList.remove("letswork-opened");
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <div
        className="z-[1] fixed top-6 left-6 lg:top-[2vw] lg:left-[2vw] "
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <button
          className="flex items-center justify-center transition-all duration-[0.3s] ease-[ease-in-out] helv-medium text-[#FDF9EC] bg-[#231F20] rounded-[2rem] p-4 lg:p-[1vw] lg:px-[1.2vw] lg:text-[1.1vw] hover:scale-105"
          onClick={() => openContactSection()}
        >
          Vamos <span className="block"> conversar?</span>
        </button>
      </div>
      <div
        className="z-[50] transition-all duration-[0.8s] ease-[ease-in-out] opacity-0 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 w-0 h-screen"
        ref={contactSection}
      >
        <div className="form-contact translate-x-[-60vw] duration-[0.8s] ease-[ease-in-out] opacity-0 bg-[#FDF9EC] lg:my-[2vw] lg:mx-[2vw] lg:p-[1.5vw] lg:w-[50vw] lg:rounded-[.8vw]">
          <form>
            <h1 className="made-bold lg:text-[3vw]">Tem uma ideia?</h1>
            <div className="flex flex-col items-start lg:gap-[.4vw] lg:text-[1.2vw]">
              <h1 className="helv-regular  lg:px-[.3vw]">O que você deseja?</h1>
              <div className="flex lg:gap-[1vw] lg:mt-[.5vw]"></div>
            </div>
          </form>
        </div>
        <div className="fixed top-6 right-6 lg:top-[2vw] lg:right-[2.5vw]">
          <button
            className="hidden items-center justify-center transition-all duration-[0.3s] ease-[ease-in-out] helv-medium text-[3rem] text-[#231F20] bg-[#FDF9EC] rounded-full scale-[.90] p-4 w-12 h-12 lg:p-[1vw] lg:text-[3vw] lg:w-[3.5vw] lg:h-[3.5vw]  hover:scale-100 "
            onClick={closeContactSection}
          >
            <div className="flex flex-col gap-[.4rem]">
              <X size={32} color="#231f20" weight="bold" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default LetsWork;
