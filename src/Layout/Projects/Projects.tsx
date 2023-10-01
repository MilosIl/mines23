import Project from "../../Components/Project/Project";
import AnimateIn from "../../Hooks/AnimateIn";

import doggo from "../../assets/doggo.png";
import salon from "../../assets/salon.png";
import rentCar from "../../assets/rent-a-car.png";

import "./projects.css";

const Projects: React.FC = () => {
  return (
    <AnimateIn
      from={{ opacity: 0, translate: "0 2em" }}
      to={{ opacity: 1, translate: "none" }}>
      <div id="projects">
        <h2>Projects</h2>
        <main className="project-section">
          <Project
            name={"Hair studio"}
            description={
              "Website that you can make a appointment for your hair treatment"
            }
            technologies={["React", "Material UI", "Express", "MongoDb"]}
            image={salon}
            gLink={"https://github.com/MilosIl/hair-salon"}
            link="https://beauty-studio.mines-dev.com/"
          />
          <Project
            name={"Favorite dog"}
            description={"Website where you can find information of breed dog"}
            technologies={["Next.js", "Tailwindcss"]}
            image={doggo}
            link={"https://doggo-favorite.vercel.app/"}
            gLink="https://github.com/MilosIl/doggo_favorite"
          />
          <Project
            name={"Rent a car"}
            description={"Website presentation of rent a car"}
            technologies={["React", "TailwindCSS"]}
            image={rentCar}
            gLink={"https://github.com/MilosIl/rent-a-car"}
            link="https://rent-cars.mines-dev.com"
          />
        </main>
      </div>
    </AnimateIn>
  );
};

export default Projects;
