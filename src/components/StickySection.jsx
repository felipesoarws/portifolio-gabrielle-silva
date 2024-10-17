import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// icons
import photoshop from "../assets/icons/photoshop.png";
import aftereffects from "../assets/icons/aftereffects.png";
import illustrator from "../assets/icons/illustrator.png";
import premiere from "../assets/icons/premiere.png";
import lightroom from "../assets/icons/lightroom.png";
import indesign from "../assets/icons/indesign.png";
import figma from "../assets/icons/figma.png";
import finalcut from "../assets/icons/finalcut.png";

// assets
import sticky_photo from "../assets/sticky_photo.png";
import blur from "../assets/blur_title.png";

const StickySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex min-h-screen mx-4 my-8 lg:mx-0 lg:my-[2vw] lg:w-[99vw]">
      <div className="flex flex-col box-border overflow-hidden items-end text-right mr-4 mt-5 gap-10 lg:gap-[8vw] lg:w-[50vw] lg:px-[3vw] lg:py-[1vw] lg:mr-[5vw] lg:mt-0">
        <section className="experiences" id="experiencias">
          <div className="lg:mb-[2vw]">
            <Title name={"Experiências"} />
          </div>
          <div className="flex flex-col gap-4 lg:gap-[3vw]">
            <Item
              title={"SwordFish Brasil"}
              subtitle={"Diretora de Arte"}
              years={"2021 - Até o momento"}
            />
            <Item
              title={"SuperCinema"}
              subtitle={"Editora de vídeo"}
              years={"2020 - 2021"}
            />
            <Item
              title={"4Mov Produções"}
              subtitle={"Fotógrafa"}
              years={"2019 - 2020"}
            />
            <Item
              title={"Ampli Comunicação"}
              subtitle={"Produtora audiovisual & Editora de vídeo"}
              years={"2015 - 2020"}
            />
          </div>
        </section>
        <section className="education" id="educacoes">
          <div className="lg:mb-[2vw]">
            <Title name={"Educações"} />
          </div>
          <div className="flex flex-col gap-4 lg:gap-[3vw]">
            <Item
              title={"Crazy Cow Films"}
              subtitle={"Montagem na Prática"}
              years={"2024"}
            />
            <Item
              title={"Domestika"}
              subtitle={"Edição e Narrativa Audiovisual para curta metragem"}
              years={"2021"}
            />
            <Item
              title={"Canon"}
              subtitle={"Simpósio Mulheres no Audiovisual"}
              years={"2021"}
            />

            <Item
              title={"Anhembi Morumbi"}
              subtitle={"Rádio, Televisão & Comunicação Digital"}
              type={"Bacharelado"}
              years={"2017 - 2020"}
            />
          </div>
        </section>
        <section className="skills" id="skills">
          <div className="lg:mb-[2vw]">
            <Title name={"Skills"} />
          </div>
          <div className="flex flex-col gap-4 lg:gap-[3vw]">
            <Skill icon={photoshop} name={"Photoshop"} />
            <Skill icon={aftereffects} name={"After Effects"} />
            <Skill icon={illustrator} name={"Illustrator"} />
            <Skill icon={premiere} name={"Premiere"} />
            <Skill icon={lightroom} name={"Lightroom"} />
            <Skill icon={indesign} name={"Indesign"} />
            <Skill icon={figma} name={"Figma"} />
            <Skill icon={finalcut} name={"Final Cut"} />
          </div>
        </section>
      </div>
      <div>
        <img
          src={sticky_photo}
          alt="sticky_photo"
          className="pointer-events-none sticky h-[95vh] translate-y-[1rem] top-0 object-cover rounded-[.8rem] w-[70vw] md:h-screen md:w-[50vw] lg:translate-x-[-3vw] lg:rounded-none lg:translate-y-[0rem]"
        />
      </div>
    </div>
  );
};

export default StickySection;

const Title = ({ name }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <h2 className="made-bold text-[1.8rem] lg:text-[4vw] relative">
        {name}
        <img
          src={blur}
          className="pointer-events-none absolute top-[-.5rem] right-[-.6rem] w-[3rem] lg:top-[-1.1vw] lg:w-[5.5vw] lg:right-[-2.9vw] min-[1440px]:right-[-2.4vw] min-[1440px]:top-[-.7vw]"
        />
      </h2>
    </div>
  );
};

const Item = ({ title, subtitle, type, years }) => {
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
      <h3 className="helv-regular  text-[#929292]  text-[1rem]  leading-[1rem] translate-y-[-.2rem] lg:text-[1.7vw] lg:leading-[2vw]  lg:translate-y-[-.5vw]">
        {type}
      </h3>
      <h4 className="helv-light text-[1rem] leading-4 lg:text-[2.2vw] lg:translate-y-[-.3vw] lg:w-[28vw] lg:leading-[2.5vw]">
        {subtitle}
      </h4>
      <p className="helv-regular text-[#929292] text-[.8rem] lg:text-[1.5vw]">
        {years}
      </p>
    </div>
  );
};

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
