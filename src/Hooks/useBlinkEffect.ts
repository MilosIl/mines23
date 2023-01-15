import { useEffect, useState } from "react";
export enum Phase {
  Typing,
  Pausing,
  Deleting,
}
const TYPING_INTERVAL = 150;
const PAUSE_INTERVAL = 1500;
const DELETE_INTERVAL = 150;
const useBlinkEffect = (
  jobTitles: string[]
): {
  title: string;
  selectedTitle: string;
  phase:Phase
} => {
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [title, setTitle] = useState("");
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedWord = jobTitles[selectedTitle].slice(
          0,
          title.length + 1
        );
        if (nextTypedWord === title) {
          setPhase(Phase.Pausing);
          return;
        }        
        const timeout = setTimeout(() => {
          setTitle(nextTypedWord);
        }, TYPING_INTERVAL);
        return () => {
          clearInterval(timeout);
        };
      }
      case Phase.Deleting: {
        if (!title) {
          const nextTitle = selectedTitle + 1;
          setSelectedTitle(jobTitles[nextTitle] ? nextTitle : 0);
          setPhase(Phase.Typing);
          return;
        }
        if(selectedTitle === 3){
          setPhase(Phase.Pausing)
        }
        const nextRemaining = jobTitles[selectedTitle].slice(
          0,
          title.length - 1
        );
        const timeout = setTimeout(() => {
          setTitle(nextRemaining);
        }, DELETE_INTERVAL);
        return () => {
          clearInterval(timeout);
        };
      }
      case Phase.Pausing: {
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_INTERVAL);
      }
    }
  }, [jobTitles, title, phase, selectedTitle]);
  return { title, selectedTitle: title[selectedTitle], phase };
};
export default useBlinkEffect;
