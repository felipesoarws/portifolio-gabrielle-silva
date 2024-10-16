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
          data-aos="fade-right"
          data-aos-duration="1500"
        />
      </div>
      <div className="text-center mx-4 gap-6 flex flex-col md:mx-24 lg:w-[50vw] lg:gap-[3vw] lg:text-left lg:md:mx-0">
        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2vw] lg:mr-[8vw] min-[1440px]:text-[1.5vw] min-[1440px]:mr-[12vw]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Com{" "}
          <span className="helv-bold">
            7 anos de experiência no audiovisual
          </span>
          , comecei minha carreira na fotografia e logo migrei para a edição de
          vídeo, unindo narrativa e estética visual.
        </p>

        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2vw] lg:mr-[8vw] min-[1440px]:text-[1.5vw] min-[1440px]:mr-[12vw]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Ao longo da minha trajetória, atuei em diversas áreas, como vídeos
          publicitários, entrevistas e motion graphics, sempre focando em
          qualidade e criatividade.
        </p>

        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2vw] lg:mr-[8vw] min-[1440px]:text-[1.5vw] min-[1440px]:mr-[13vw] "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Hoje, sou <span className="helv-bold">Diretora de Arte </span>
          no segmento health, utilizando minha expertise em edição de vídeo e
          design para criar soluções visuais que combinam estética e estratégia.
        </p>
        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2vw] lg:mr-[8vw] min-[1440px]:text-[1.5vw] min-[1440px]:mr-[13vw] "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Sou uma profissional <span className="helv-bold">versátil</span>,{" "}
          <span className="helv-bold">curiosa</span> e{" "}
          <span className="helv-bold">dedicada</span> à busca constante por
          inovação.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
