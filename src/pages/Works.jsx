import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import GoBack from "../components/GoBack";
import Footer from "../components/Footer";

import projects from "../data/projects.json";

const Works = () => {
  const [advertisingProjects, setAdvertisingProjects] = useState(projects[0]);
  const [audiovisualProjects, setAudiovisualProjects] = useState(projects[1]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <GoBack where={"home"} />
      <div className="min-h-screen overflow-x-hidden flex flex-col items-center justify-center mx-8 my-20 gap-10 lg:items-center lg:gap-[8vw] lg:my-[6vw] lg:mx-[3vw]">
        <div>
          <h3
            className="made-medium my-4 text-[2rem]  lg:my-[3vw] lg:text-[5vw] text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Publicidade ;)
          </h3>
          <div className="flex flex-col gap-6 lg:gap-[3vw]">
            {advertisingProjects.map((project, idx) => (
              <div
                className="flex items-end justify-between pb-4 gap-6 border-b-[#92929231]  border-b-2 lg:pb-[3vw] lg:gap-[2vw] "
                key={idx}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="w-[50vw] lg:w-[50vw]">
                  <h2
                    className="made-bold text-[1.5rem] leading-[1.5rem] lg:text-[5vw]  lg:leading-[1.9vw]"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <Link to={`/works/${project.slug}`}>
                      {project.secondTitle}
                    </Link>
                  </h2>
                  <h3
                    className="helv-light text-[1rem] leading-[.9rem] text-[#929292] lg:text-[2vw]  lg:leading-[3.5vw]"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <Link to={`/works/${project.slug}`}>
                      {project.projectTitle}
                    </Link>
                  </h3>
                </div>
                <div
                  className="overflow-hidden rounded-[.5rem] lg:rounded-[.8vw]"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <Link to={`/works/${project.slug}`}>
                    <img
                      src={project.background}
                      alt={project.projectTitle}
                      className="object-cover object-top rounded-[.5rem] w-[6rem] h-[5rem] transition-all duration-[.3s] ease-in-out lg:rounded-[.8vw] lg:h-[15vw] hover:scale-105 lg:w-[30vw] "
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  <div>
          <h3
            className="made-medium my-4 text-[2rem] lg:my-[3vw] lg:text-[5vw] text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Audiovisual ;)
          </h3>
          <div className="flex flex-col gap-6 lg:gap-[3vw]">
            {audiovisualProjects.map((project, idx) => (
              <div
                className="flex items-end justify-between pb-4 gap-6 border-b-[#92929231]  border-b-2 lg:pb-[3vw] lg:gap-[2vw] "
                key={idx}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="w-[50vw] lg:w-[50vw]">
                  <h2
                    className="made-bold text-[1.5rem] leading-[1.5rem] lg:text-[5vw]  lg:leading-[1.9vw]"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <Link to={`/works/${project.slug}`}>
                      {project.secondTitle}
                    </Link>
                  </h2>
                  <h3
                    className="helv-light text-[1rem] leading-[.9rem] text-[#929292] lg:text-[2vw]  lg:leading-[3.5vw]"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <Link to={`/works/${project.slug}`}>
                      {project.projectTitle}
                    </Link>
                  </h3>
                </div>
                <div
                  className="overflow-hidden rounded-[.5rem] lg:rounded-[.8vw]"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <Link to={`/works/${project.slug}`}>
                    <img
                      src={project.background}
                      alt={project.projectTitle}
                      className="object-cover object-top rounded-[.5rem] w-[6rem] h-[5rem] transition-all duration-[.3s] ease-in-out lg:rounded-[.8vw] lg:h-[15vw] hover:scale-105 lg:w-[30vw] "
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Works;
