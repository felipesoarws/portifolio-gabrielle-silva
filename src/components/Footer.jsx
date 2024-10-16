import React from "react";

const Footer = () => {
  return (
    <div>
      <div></div>
      <div className="justify-between overflow-hidden lg:translate-y-[8vw] min-[1440px]:translate-y-[15vw] w-[99vw]">
        <div className="animation-div  inline-flex animate-[move-rtl_60s_linear_infinite]">
          <FooterTitle name="GABRIELLE" lastname="SILVA" />
          <FooterTitle name="GABRIELLE" lastname="SILVA" />
          <FooterTitle name="GABRIELLE" lastname="SILVA" />
          <FooterTitle name="GABRIELLE" lastname="SILVA" />
          <FooterTitle name="GABRIELLE" lastname="SILVA" />
          <FooterTitle name="GABRIELLE" lastname="SILVA" />
          <FooterTitle name="GABRIELLE" lastname="SILVA" />
          <FooterTitle name="GABRIELLE" lastname="SILVA" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterTitle = ({ name, lastname }) => {
  return (
    <h4 className="made-medium px-4 text-[4rem] lg:px-[4vw] lg:text-[14vw] whitespace-nowrap pointer-events-none lg:leading-[12vw]">
      {name}{" "}
      <span className="made-medium text-[4rem] lg:text-[13vw] text-[#F86C9A] pointer-events-none">
        {" "}
        ©{" "}
      </span>
      {lastname}
    </h4>
  );
};
