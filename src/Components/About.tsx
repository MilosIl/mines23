import Card from "./Card";

const About = () => {
  return (
    <section className="about-section" id='about'>
      <h2>About me</h2>
      <p>
        Self thought developer, with passion for new technologies. And ready to
        make a great product from your idea. 
      </p>
      <p>
        As developer, I love solving new puzzles and questions that can be
        thought as puzzle finished
      </p>
      <p>
        Problem solver, I have personal way of handling a problem.. First part
        is to make it into small portions and to have a clear understanding of
        what is that problem and how it should be fixed
      </p>
      <p>What is my passion on web technologies</p>

      <p>Every developer dream is that hes product is used. That is going to make a change in (....)</p>

      <p>
        Everything good needs to be shared with others, but what is that in my
        case
      </p>
      <p>to challenge myself and will to learn more</p>
      <p>Keeping up with challenges and improving my knowledge</p>
      <div className="card-container">

      <Card title="Team player" body=" Looking for ways to improve myself and people around me."/>
      <Card title="Devotion" body="  Deadlines are important, otherwise job wouldn't be finished."/>
      <Card title="Remark" body=" Open for new projects and suggestions for improvement."/>
      </div>
    </section>
  );
};

export default About;
