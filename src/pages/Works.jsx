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
      <GoBack />
      <div className="min-h-screen flex flex-col items-center justify-center mx-4 lg:items-center lg:gap-[8vw] lg:my-[6vw] lg:mx-[3vw]">
        <div>
          <h3
            className="made-medium my-4 lg:my-[3vw] lg:text-[5vw] text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Publicidade ;)
          </h3>
          <div className="flex flex-col lg:gap-[3vw]">
            {advertisingProjects.map((project, idx) => (
              <div
                className="flex items-end justify-between border-b-[#929292]  border-b-2 lg:pb-[3vw] lg:gap-[2vw] "
                key={idx}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="lg:w-[50vw]">
                  <h2
                    className="made-bold lg:text-[5vw] lg:leading-[1.9vw]"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <Link to={`/works/${project.slug}`}>
                      {project.secondTitle}
                    </Link>
                  </h2>
                  <h3
                    className="helv-light text-[#929292] lg:text-[2vw]"
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
                      className="object-cover object-top rounded-[.5rem] transition-all duration-[.3s] ease-in-out lg:rounded-[.8vw] lg:h-[15vw] hover:scale-105 lg:w-[30vw] "
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3
            className="made-medium my-4 lg:my-[3vw] lg:text-[5vw] text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Audiovisual ;)
          </h3>
          <div className="flex flex-col lg:gap-[3vw]">
            {audiovisualProjects.map((project, idx) => (
              <div
                className="flex items-end justify-between border-b-[#929292]  border-b-2 lg:pb-[3vw] lg:gap-[2vw] "
                key={idx}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="lg:w-[50vw]">
                  <h2
                    className="made-bold lg:text-[5vw] lg:leading-[1.9vw]"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <Link to={`/works/${project.slug}`}>
                      {project.secondTitle}
                    </Link>
                  </h2>
                  <h3
                    className="helv-light text-[#929292] lg:text-[2vw]"
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
                      className="object-cover object-top rounded-[.5rem] transition-all duration-[.3s] ease-in-out lg:rounded-[.8vw] lg:h-[15vw] hover:scale-105 lg:w-[30vw] "
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Works;
