import Accordion from "../Components/Accordion";

const Questions = () => {
   
  // da se vidi samo rec link(a href da vodi)

  return (
    <section>
      <h3>FAQ</h3>
      <Accordion
        question="What do I do?"
        content="I build websites and web application. Helping you to create a beautiful web interaction."
      />
      <Accordion
        question="Can you fix my printer?"
        content="As someone who loves computers and have passion for technology. One of most asked question. So the answer is NO."
      />
      <Accordion
        question="Buy me a coffee / beer"
        content={`You can do that by going to a ${<a href="#">link</a>} or just message me so we can drink it together`}
      />
    </section>
  );
};

export default Questions;
