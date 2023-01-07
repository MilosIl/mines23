import React, { useState } from "react";

type IProject = {
  name: string;
  description: {
    shortDescription: string;
    longDescription: string;
  };
  image: string;
  links: string;
};

const Project = ({ name, description, image, links }: IProject) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    // koristi se da se pojavi drugi izgled
    setIsOpened(!isOpened);
  };
  return (
    <div>
      <h4>{name}</h4>
      <div>{image}</div>
      <p onClick={handleClick}>{(description.longDescription = "duzi bla")}</p>
      {/* da se procita samo malo o projektu, pa kada se klikne na njega da
            izmeni izgled, bude popup alert sa vise opisa tj teksta 
        */}
      <p>tehnologije koriscene</p>
      <p>{links} github</p>
      <p>{links} demo</p>
    </div>
  );
};

export default Project;
