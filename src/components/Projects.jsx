import { Link } from "react-router-dom";

// assets
import blur from "../assets/blur_title.png";

// data
import projects from "../data/projects.json";
import photos from "../data/photos.json";

//icons
import { BehanceLogo, LinkedinLogo } from "@phosphor-icons/react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-4  mt-[1rem] lg:gap-[5vw] lg:mt-[1vw] lg:mx-[10vw]">
      <div className="flex flex-col items-center justify-center" id="projetos">
        <Title name={"Projetos"} />
        <h3
          className="made-medium my-4 lg:text-[2vw]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Designs ;)
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-[4vw]">
        <Link to={`/works/${projects[0].slug}`}>
          <ProjectItem
            title={projects[0].title}
            subtitle={projects[0].desc}
            background={projects[0].background}
          />
        </Link>
        <Link to={`/works/${projects[1].slug}`}>
          <ProjectItem
            title={projects[1].title}
            subtitle={projects[1].desc}
            background={projects[1].background}
          />
        </Link>
        <Link to={`/works/${projects[2].slug}`}>
          <ProjectItem
            title={projects[2].title}
            subtitle={projects[2].desc}
            background={projects[2].background}
          />
        </Link>
        <Link to={`/works/${projects[3].slug}`}>
          <ProjectItem
            title={projects[3].title}
            subtitle={projects[3].desc}
            background={projects[3].background}
          />
        </Link>
        <Link to={`/works/${projects[4].slug}`}>
          <ProjectItem
            title={projects[4].title}
            subtitle={projects[4].desc}
            background={projects[4].background}
          />
        </Link>

        <div
          className="text-center flex flex-col justify-center gap-2 md:w-[40rem] lg:text-right lg:gap-[1vw] lg:w-[32.5vw]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <h3 className="made-medium lg:text-[1.8vw]">
              Quer dar uma olhada em mais projetos?
            </h3>
            <p className="helv-regular text-[#929292] lg:text-[1.2vw]">
              Veja meu Behance e/ou meu LinkedIn! ;)
            </p>
          </div>
          <div className="flex gap-4 mb-8 justify-center lg:justify-end">
            <a href="https://www.behance.net/gabriellesilva_" target="_blank">
              <BehanceLogo
                size={32}
                color="#231f20"
                weight="bold"
                className="transition-all duration-[0.3s] ease-[ease-in-out] hover:scale-105"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielle-silva-b59b771a1/"
              target="_blank"
            >
              <LinkedinLogo
                size={32}
                color="#231f20"
                weight="fill"
                className="transition-all duration-[0.3s] ease-[ease-in-out] hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center" id="projetos">
        <h3
          className="made-medium my-4 lg:text-[2vw]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Audiovisual ;)
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-[4vw]">
        {photos.map((item) => (
          <Link to={`/works/${item.slug}`} key={item.id}>
            <ProjectItem
              title={item.title}
              subtitle={item.desc}
              background={item.background}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

const Title = ({ name }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <h2 className="made-bold text-[1.8rem] lg:text-[4vw] relative">
        {name}
        <img
          src={blur}
          className="pointer-events-none absolute top-[-.5rem] right-[-.6rem] w-[3rem]  lg:top-[-1.1vw] lg:w-[5.5vw] lg:right-[-2.9vw] min-[1440px]:right-[-2.4vw] min-[1440px]:top-[-.7vw]"
        />
      </h2>
    </div>
  );
};

const ProjectItem = ({ title, subtitle, background }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="project-item flex flex-col gap-1 lg:gap-[.7vw] "
    >
      <div className="cursor-pointer overflow-hidden lg:rounded-[.8vw]">
        <img
          src={background}
          alt="cover project"
          className="h-[10.3rem] object-cover rounded-[.5rem] transition-all duration-[.3s] ease-in-out lg:rounded-[.8vw] lg:w-[33vw] lg:h-[17vw] hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-start lg:gap-[.7vw]">
        <h3 className="cursor-pointer relative made-medium lg:text-[1.5vw] ">
          {title}
        </h3>
        <h4 className="cursor-pointer relative helv-regular text-[#929292] lg:text-[1.2vw] lg:leading-[.1vw] ">
          {subtitle}
        </h4>
      </div>
    </div>
  );
};
