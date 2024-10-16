import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "../data/photos.json";
import Footer from "../components/Footer";
import GoBack from "../components/GoBack";

const DesignDetails = () => {
  const [projectData, setProjectData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (projectData.length === 0) {
      const project = data.filter((item) => item.slug === id);

      if (project.length > 0) {
        setProjectData(project);
      }
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center mx-4 mt-[1rem] lg:gap-[5vw] lg:mt-[2vw] lg:mx-[10vw]">
      <GoBack />
      {projectData.map((item, i) => (
        <div key={i}>
          <div className="my-6 lg:my-[3vw] text-center">
            <h1 className="made-bold text-[1.8rem] lg:text-[4vw]">
              {item.title}
            </h1>
            <p className="helv-regular text-[#929292] text-[1.2rem] lg:text-[2vw]">
              {item.desc}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center lg:gap-[2vw] lg:my-[3vw]">
            {projectData[0].assets?.videos && (
              <video
                className="rounded-md lg:rounded-[1vw]"
                src={projectData[0].assets?.videos[0]}
                controls
              ></video>
            )}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default DesignDetails;
