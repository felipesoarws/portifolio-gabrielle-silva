import { Link } from "react-router-dom";

// assets
import blur from "../assets/blur_title.png";

// data
import projects from "../data/projects.json";

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
          Publicidade ;)
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-[4vw]">
        {projects[0].slice(0, 4).map((item) => (
          <Link to={`/works/${item.slug}`} key={item.id}>
            <ProjectItem
              title={item.title}
              subtitle={item.desc}
              background={item.background}
            />
          </Link>
        ))}
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
        {projects[1].slice(0, 4).map((item) => (
          <Link to={`/works/${item.slug}`} key={item.id}>
            <ProjectItem
              title={item.title}
              subtitle={item.desc}
              background={item.background}
            />
          </Link>
        ))}
      </div>
      <div
        className="text-center flex flex-col justify-center gap-2 my-8 md:w-[40rem] lg:text-right lg:gap-[1vw] lg:w-[32.5vw]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className=" text-center">
          <h3 className="made-medium text-[1.2rem] lg:text-[1.8vw]">
            Quer dar uma olhada em mais projetos?
          </h3>

          <p className="all-works helv-regular text-[#f86c9b94]  text-[1.5rem] lg:text-[1.8vw]">
            <a href="/works" className="relative">
              Clique <strong className="text-[#F86C9A] ">aqui</strong> para ver
              todos!
            </a>
          </p>
        </div>
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
      className="cursor-pointer project-item flex flex-col gap-1 lg:gap-[.7vw] "
    >
      <div className="cursor-pointer overflow-hidden lg:rounded-[.8vw]">
        <img
          src={background}
          alt="cover project"
          className="w-[20rem] h-[10.3rem] object-cover rounded-[.5rem] transition-all duration-[.3s] ease-in-out lg:rounded-[.8vw] lg:w-[33vw] lg:h-[17vw] hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-start lg:gap-[.7vw]">
        <h3 className="cursor-pointer  relative made-medium lg:text-[1.5vw] ">
          {title}
        </h3>
        <h4 className="cursor-pointer  relative helv-regular text-[#929292] lg:text-[1.2vw] lg:leading-[.1vw] ">
          {subtitle}
        </h4>
      </div>
    </div>
  );
};
