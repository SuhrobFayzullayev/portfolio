// React hooks
import { useContext } from "react";

// Libraries
import { Slide } from "react-awesome-reveal";
import { Row } from "react-bootstrap";

// Data Context
import Data from "../../Context/Data";

// Components
import LogoCollection from "./LogoCollection";
import SkillsDescription from "./SkillsDescription";

// Styled Component
import SkillsWrapper from "./SkillsWrapper";

export default function Skills() {
  // data
  const data = useContext(Data);
  const { programmerImg } = data.skills;
  return (
    <SkillsWrapper fluid="xl">
      <h1 className="text-center text-white fw-bold mt-5 mb-5">Skills</h1>
      <Row>
        <Slide className="col-md-6 col-sm-10 cols mx-auto">
          <img src={programmerImg} className="programmer-img" />
        </Slide>

        {/* LogoCollection Componet */}
        <LogoCollection />
      </Row>

      {/* SkillsDescription Component*/}
      <SkillsDescription />
    </SkillsWrapper>
  );
}
