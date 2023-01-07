import { useState } from "react";

// svg ikonice

interface IAccordion {
  question: string;
  content: string;
}

const Accordion = ({ question, content }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuestion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div onClick={handleQuestion} className="accordion-title">
        <h3>{question}</h3>
        <div>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
