import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "../data/photos.json";

const PhotosDetails = () => {
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
    <div>
      {projectData.map((item, i) => (
        <div key={i}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default PhotosDetails;
