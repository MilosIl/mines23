import Project from "../Components/Project";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <section className="project-section">
        <Project
          name={"Hair studio"}
          description={"Website that you can make a appointment for your hair"}
          technologies={['React','Mui', 'Express','MongoDb']}
          image={"nema slike"}
          links={"#"}
        />
        <Project
          name={"Netflix"}
          description={"Clone of netflix, as a final project from Scrimba"}
          technologies={['React',"Express",'Firebase']}
          image={"nema slike"}
          links={"#"}
        />
        <Project
          name={"Favorite dog"}
          description={"Website where you can search for information of your favorite dog and save them for later"}
          technologies={['Next.js', 'Tailwindcss']}
          image={"nema slike"}
          links={"google.com"}
          
        />
      </section>
    </div>
  );
};

export default Projects;
