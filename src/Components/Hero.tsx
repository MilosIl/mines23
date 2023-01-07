import useBlinkEffect from "../Hooks/useBlinkEffect";

const Hero = () => {
  const jobTitles = ["Front-end", "Frontend", "Web", "React"];
  const { title, selectedTitle} = useBlinkEffect(jobTitles);

const handleProject=()=>{
    console.log('projekti');
}

  return (
    <section>
      <p>Hi I'm Milos</p>
      <h1>
        <span className="blinking-cursor" aria-label={selectedTitle}>
          {title}
        </span>
        developer
      </h1>
      <button onClick={handleProject}>Projects</button>
    </section>
  );
};

export default Hero;
