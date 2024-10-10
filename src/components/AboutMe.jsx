// assets
import aboutme from "../assets/aboutme_photo.png";

const AboutMe = () => {
  return (
    <div className="h-[100vh] mx-8 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-[3vw] lg:mt-[1rem] lg:mx-0">
      <div className="lg:w-[50vw] flex items-end justify-end lg:translate-y-[-1.5vw]">
        <img
          src={aboutme}
          className="pointer-events-none  lg:my-[2vw] lg:w-[33vw] min-[1440px]:w-[35vw]"
        />
      </div>
      <div className="text-center gap-6 lg:w-[50vw] flex flex-col lg:gap-[3vw] lg:text-left">
        <p className="helv-light text-[#231F20] lg:text-[2.2vw] lg:mr-[8vw] min-[1440px]:text-[2vw] min-[1440px]:mr-[12vw]">
          Meu nome é Gabrielle, tenho <span className="helv-bold">25 anos</span>
          , moro em <span className="helv-bold">São Paulo</span>, e trabalho
          como <span className="helv-bold">diretora de arte</span>.
        </p>

        <p className="helv-light text-[#231F20] lg:text-[2.2vw] lg:mr-[8vw] min-[1440px]:text-[2vw] min-[1440px]:mr-[12vw]">
          Desde o início me encontrei na área do design, sempre procurando
          identificar novas soluções de maneira criativa e inspiradora.
        </p>

        <p className="helv-light text-[#231F20] lg:text-[2.2vw] lg:mr-[8vw] min-[1440px]:text-[2vw] min-[1440px]:mr-[12vw]">
          Também atuo como <span className="helv-bold">fotógrafa</span>,
          explorando diferentes perspectivas e técnicas para capturar momentos
          únicos.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
