import github from "../assets/mdi_github.svg";

type IProject = {
  name: string;
  description: string;
  image: string;
  links: string;
};

const Project = ({ name, description, image, links }: IProject) => {


  return (
    <article className="project-card">
      <h3>{name}</h3>
      <div><img src={image} alt={image}/></div>
      <p>
        {description }
      </p>
      <p className="project-technologies">Technologies used: </p>
      <ul className="project-list">
        <li>Next.js</li>
        <li>Tailwind.css</li>
      </ul>
      <div className="project-links">
        <a href={links}>
          <img src={github} alt={github} />
        </a>
        <a href={links}> see demo</a>
      </div>
    </article>
  );
};

export default Project;
