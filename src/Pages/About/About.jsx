import React, { useContext } from "react";

// Libraries
import { Slide, Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";

// Data Context
import Data from "../../Context/Data";

// Styled Component
import { AboutWrapper } from "./AboutWrapper";
export default function About() {
  // Data
  const data = useContext(Data);
  const { title, description, question, answer, resumeLink, img } =
    data.aboutMe;
    
  return (
    <AboutWrapper>
      <h1>
        <Fade>About Me</Fade>
      </h1>
      <Row>
        <Col className="img-wrapper" lg={4} md={6} sm={6}>
          <Slide>
            <img className="img mx-auto" src={img} />
          </Slide>
        </Col>
        <Col className="pt-5 mb-2" md={6} lg={5} sm={6}>
          <Slide direction="right">
            <h5>{title}</h5>
            <h6>{description}</h6>

            <p className="question">{question}</p>
            <h6 className="answer">{answer}</h6>
            <div className="btns">
              <a target="_blank" href={resumeLink} className="sourse me-3">
                <span></span>
                <span></span>
                See My Resume
              </a>
            </div>
          </Slide>
        </Col>
      </Row>
    </AboutWrapper>
  );
}
