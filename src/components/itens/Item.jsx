import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Item = ({ title, subtitle, years }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex flex-col leading-8 lg:leading-[4vw]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h3 className="helv-bold text-[1.2rem] lg:text-[2.5vw]">{title}</h3>
      <h4 className="helv-light text-[1rem] leading-4 lg:text-[2.2vw] lg:translate-y-[-.3vw] lg:w-[28vw] lg:leading-[2.5vw]">
        {subtitle}
      </h4>
      <p className="helv-regular text-[#929292] text-[.8rem] lg:text-[1.5vw]">
        {years}
      </p>
    </div>
  );
};

export default Item;
