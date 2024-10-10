import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Skill = ({ icon, name }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex items-center justify-end gap-2 lg:gap-[1vw]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <span className="helv-medium text-[1.1rem] lg:text-[3vw]">{name}</span>
      <img
        src={icon}
        alt={name}
        className="w-8 lg:w-[4vw] pointer-events-none"
      />
    </div>
  );
};

export default Skill;
