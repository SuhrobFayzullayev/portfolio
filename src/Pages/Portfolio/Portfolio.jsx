// Components
import { PortfolioWrapper } from "./PortfolioWrapper";
import Projects from "./Projects";

export default function Portfolio() {
  return (
    <PortfolioWrapper>
      <div className="project">
        <h1>Portfolio</h1>
      </div>
      <Projects />
    </PortfolioWrapper>
  );
}
