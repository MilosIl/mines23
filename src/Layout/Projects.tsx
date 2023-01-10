import Project from "../Components/Project";

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <section className="project-section" id="projects">
        <Project
          name={"Doggo"}
          description={"kratka varijanta teksta koja treba da se vidi"}
          image={"nema slike"}
          links={"#"}
        />
        <Project
          name={"Doggo"}
          description={"kratka varijanta teksta koja treba da se vidi"}
          image={"nema slike"}
          links={"#"}
        />
        <Project
          name={"Doggo"}
          description={"kratka varijanta teksta koja treba da se vidi"}
          image={"nema slike"}
          links={"google.com"}
        />
      </section>
    </>
  );
};

export default Projects;
