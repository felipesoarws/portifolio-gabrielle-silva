// assets
import blur from "../assets/blur_title.png";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-4  lg:gap-[3vw] lg:mt-[1rem] lg:mx-[10vw]">
      <div className="flex flex-col items-center justify-center" id="projetos">
        <Title name={"projetos"} />
        <h3
          className="made-medium lg:text-[2vw]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          designs ;)
        </h3>
      </div>
      <div>
        <ProjectItem title={""} subtitle={""} bg={""} />
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
          className="pointer-events-none absolute top-[-.5rem] right-[-.6rem] w-[3rem] lg:top-[-1.1vw] lg:w-[5.5vw] lg:right-[-2.9vw] min-[1440px]:right-[-2.4vw] min-[1440px]:top-[-.7vw]"
        />
      </h2>
    </div>
  );
};

const ProjectItem = ({ name }) => {
  return <div data-aos="fade-up" data-aos-duration="1000"></div>;
};
