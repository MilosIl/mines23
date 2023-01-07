import React from "react";
import Project from "../Components/Project";

const Projects = () => {
  return (
    <section>
      <h3>Projekti</h3>
      <Project
        name={"Doggo"}
        description={{
          shortDescription: "kratka varijanta teksta koja treba da se vidi",
          longDescription: "duga prica koja moze da ima neki opis i korist",
        }}
        image={"nema slike"}
        links={"google.com"}
      />
    </section>
  );
};

export default Projects;
