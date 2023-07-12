// React hooks
import { useContext } from "react";

// Libraries
import { Fade } from "react-awesome-reveal";

// Data Context
import Data from "../../../Context/Data";

export default function SkillsDescription() {
  // data
  const data = useContext(Data);
  const { skillsDescription } = data.skills;

  return (
    <div className="my-5">
      <div className="skills-description">
        {skillsDescription.map((v, i) => (
          <Fade key={i + v}>
            <h5>{v}</h5>
          </Fade>
        ))}
      </div>
    </div>
  );
}
