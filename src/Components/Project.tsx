import { useState } from "react";

import github from "../assets/mdi_github.svg";

type IProject = {
  name: string;
  description: string;
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
    <article className="project-card">
      <h4>{name}</h4>
      <div>{image}</div>
      <p onClick={handleClick}>
        {(description = "duzi bla bla tekst ")}
      </p>
      {/* da se procita samo malo o projektu, pa kada se klikne na njega da
            izmeni izgled, bude popup alert sa vise opisa tj teksta 
        */}
      <p className="project-technologies">Technologies used: </p>
      <ul className="project-list">
        <li>Next.js</li>
        <li>Tailwind.css</li>
      </ul>
      <div>
        <a href={links}>
          <img src={github} alt={github} />
        </a>
        <a href={links}> demo</a>
      </div>
    </article>
  );
};

export default Project;
