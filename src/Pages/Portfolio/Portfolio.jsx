// React hooks
import { useState } from "react";

// Components
import { PortfolioWrapper } from "./PortfolioWrapper";
import Projects from "./Projects";
import SeeMoreProjects from "./SeeMoreProjects";

export default function Portfolio() {
  // See More Project State
  const [show, setShow] = useState(false);
  return (
    <PortfolioWrapper>
      <div className="project">
        <h1>Portfolio</h1>
      </div>
      <Projects />
      {(show && <div>salom</div>) || <SeeMoreProjects setShow={setShow} />}
    </PortfolioWrapper>
  );
}
