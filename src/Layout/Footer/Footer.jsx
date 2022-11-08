// Styled Component
import { FooterWrapper } from "./FooterWrapper";

// Libraries
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <FooterWrapper>
      <Fade direction="up" className="m-0 p-0">
        <p>©SuhrobDev 2022-2023</p>
      </Fade>
    </FooterWrapper>
  );
}
