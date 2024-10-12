import { useRef } from "react";

const Menu = () => {
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const openMenu = () => {
    if (buttonRef.current.classList.contains("opened")) {
      buttonRef.current.classList.remove("opened");
      menuRef.current.classList.remove("menu-opened");
    } else {
      buttonRef.current.classList.add("opened");
      menuRef.current.classList.add("menu-opened");
    }
  };
  return (
    <div className="z-[100000000] fixed top-6 left-6 lg:top-[2vw] lg:left-[2vw] ">
      <button
        className="flex items-center justify-center transition-all duration-[0.3s] ease-[ease-in-out] helv-medium text-[3rem] text-[#FDF9EC] bg-[#231F20] rounded-full scale-[.90] p-4 w-12 h-12 lg:p-[1vw] lg:text-[3vw] lg:w-[3.5vw] lg:h-[3.5vw]  hover:scale-100"
        onClick={openMenu}
        ref={buttonRef}
      >
        <div className="flex flex-col gap-[.4rem]">
          <span className="child-1 transition-all duration-[0.3s] ease-[ease-in-out] block w-[1.5rem] h-[.15rem] lg:w-[1.5vw] lg:h-[.15vw]  bg-[#FDF9EC]"></span>
          <span className="child-2 transition-all duration-[0.3s] ease-[ease-in-out] block w-[1.5rem] h-[.15rem] lg:w-[1.5vw] lg:h-[.15vw]  bg-[#FDF9EC]"></span>
          <span className="child-3 transition-all duration-[0.3s] ease-[ease-in-out] block w-[1.5rem] h-[.15rem] lg:w-[1.5vw] lg:h-[.15vw]  bg-[#FDF9EC]"></span>
        </div>
      </button>
      <div>
        <nav className="bg-[#231F20]  rounded-lg lg:rounded-[.3vw]">
          <ul
            className="flex flex-col items-start gap-2 opacity-0 h-0 p-0 mt-1 transition-all duration-[0.3s] ease-[ease-in-out] lg:ml-[.3vw] lg:mt-[.5vw]"
            ref={menuRef}
          >
            <li className="helv-medium">
              <a
                className="hover-effect relative  text-[#fdf9ec] pb-1"
                href="#sobre"
              >
                sobre mim
              </a>
            </li>
            <li className="helv-medium">
              <a
                className="hover-effect relative  text-[#fdf9ec] pb-1"
                href="#experiencias"
              >
                experiências
              </a>
            </li>
            <li className="helv-medium">
              <a
                className="hover-effect relative  text-[#fdf9ec] pb-1"
                href="#educacoes"
              >
                educações
              </a>
            </li>
            <li className="helv-medium">
              <a
                className="hover-effect relative  text-[#fdf9ec] pb-1"
                href="#skills"
              >
                skills
              </a>
            </li>
            <li className="helv-medium">
              <a
                className="hover-effect relative  text-[#fdf9ec] pb-1"
                href="#projetos"
              >
                projetos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
