import { useEffect } from "react";

// assets
import aboutme from "../assets/aboutme_photo.png";
import artdirector from "../assets/artdirector_circle.png";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-4 lg:flex-row lg:items-start lg:gap-[3vw] lg:mt-[1rem] lg:mx-0">
      <div
        className="relative lg:w-[50vw] flex items-end justify-end lg:translate-y-[-1.5vw]"
        id="sobre"
      >
        <img
          src={aboutme}
          className="pointer-events-none  lg:my-[2vw] lg:w-[33vw] min-[1440px]:w-[35vw]"
        />
        <img
          src={artdirector}
          className="animate-[rotate_8s_linear_infinite] pointer-events-none absolute w-20 top-[2rem] right-[5rem] md:w-40 md:right-[9rem] lg:top-[5vw] lg:right-[7vw] lg:w-[10vw]"
        />
      </div>
      <div className="text-center gap-6 flex flex-col md:mx-24 lg:w-[50vw] lg:gap-[3vw] lg:text-left lg:md:mx-0">
        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2.2vw] lg:mr-[8vw] min-[1440px]:text-[2vw] min-[1440px]:mr-[12vw]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Meu nome é Gabrielle, tenho <span className="helv-bold">25 anos</span>
          , moro em <span className="helv-bold">São Paulo</span>, e trabalho
          como <span className="helv-bold">diretora de arte</span>.
        </p>

        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2.2vw] lg:mr-[8vw] min-[1440px]:text-[2vw] min-[1440px]:mr-[12vw]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Desde o início me encontrei na área do design, sempre procurando
          identificar novas soluções de maneira criativa e inspiradora.
        </p>

        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2.2vw] lg:mr-[8vw] min-[1440px]:text-[2vw] min-[1440px]:mr-[13vw] "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Também atuo como <span className="helv-bold">fotógrafa</span>,
          explorando diferentes perspectivas e técnicas para capturar momentos
          únicos.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
