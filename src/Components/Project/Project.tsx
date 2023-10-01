import github from "../../assets/mdi_github.svg";
import './project.css'

interface ProjectProps  {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  gLink:string;
};

const Project = ({
  name,
  description,
  image,
  link,
  technologies,gLink
}: ProjectProps) => {
  return (
    <article className="project-card">
      <h3 className="project-name">{name}</h3>
      <div className="project-image">
        <img src={image} alt={image} />
      </div>
      <p className="project-description">{description}</p>
      <p className="project-technologies">Technologies used: </p>
      <ul className="project-list">
        {technologies.map((technology, index) => {
          return <li key={index}>{technology}</li>;
        })}
      </ul>
      <div className="project-links">
        <a href={gLink} aria-label='github link of project'>
          <img src={github} alt={github} />
        </a>
        <a href={link}>see demo</a>
      </div>
    </article>
  );
};

export default Project;
