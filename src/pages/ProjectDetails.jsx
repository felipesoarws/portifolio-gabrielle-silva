import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import data from "../data/projects.json";

import Footer from "../components/Footer";
import GoBack from "../components/GoBack";

const ProjectDetails = () => {
  const [projectData, setProjectData] = useState([]);
  const { id } = useParams();
  const isPhotoProject = id.includes("ensaio");

  useEffect(() => {
    if (projectData.length === 0) {
      const audiovisualProject = data[0].filter((item) => item.slug === id);
      const photosProject = data[1].filter((item) => item.slug === id);

      if (audiovisualProject.length > 0) {
        setProjectData(audiovisualProject);
      }

      if (photosProject.length > 0) {
        setProjectData(photosProject);
      }
    }
    AOS.init();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center mx-4 mt-[1rem] lg:gap-[5vw] lg:mt-[2vw] lg:mx-[10vw]">
      <GoBack />
      {projectData.map((item, id) => (
        <div key={id}>
          <div
            className="my-6 lg:my-[3vw] text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="made-bold text-[2rem] leading-[1.8rem] lg:text-[4vw] lg:leading-[1.8vw]">
              {item.secondTitle}
            </h1>
            <h1 className="made-medium italic text-[1.8rem] lg:text-[3vw]">
              {item?.projectTitle}
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center mx-4 gap-8 lg:gap-[5vw] lg:my-[5vw]">
            {isPhotoProject ? (
              item.assets?.photos?.length > 0 ? (
                item.assets.photos.map((photo, id) => (
                  <img
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="pointer-events-none rounded-md lg:rounded-[1vw] lg:w-[30vw]"
                    src={photo}
                    alt="project img"
                    key={id}
                  />
                ))
              ) : (
                <></>
              )
            ) : item.assets?.photos?.length > 0 ? (
              item.assets.photos.map((photo, id) => (
                <img
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="pointer-events-none rounded-md lg:rounded-[1vw] lg:w-[70vw]"
                  src={photo}
                  alt="project img"
                  key={id}
                />
              ))
            ) : (
              <></>
            )}

            {item.assets?.videos?.length > 0 ? (
              item.assets.videos.map((video, id) => (
                <video
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="rounded-md lg:rounded-[1vw] lg:w-[70vw]"
                  src={video}
                  controls
                  key={id}
                ></video>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ProjectDetails;