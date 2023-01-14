import github from "../assets/mdi_github.svg";

type IProject = {
  name: string;
  description: string;
  technologies:string[];
  image: string;
  links: string;
};

const Project = ({ name, description, image, links,technologies }: IProject) => {

  return (
    <article className="project-card">
      <h3 className='project-name'>{name}</h3>
      <div><img src={image} alt={image}/></div>
      <p className="project-description">
        {description }
      </p>
      <p className="project-technologies">Technologies used: </p>
      <ul className="project-list">
        {technologies.map((technology)=>{
          return <li key={technology}>{technology}</li>
        })}
        {/* da se na hover vidi ikonica */}
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
