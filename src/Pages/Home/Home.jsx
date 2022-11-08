// Libraries
import { Col } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

// Icons
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram, BsTwitter } from "react-icons/bs";

// Styled Component
import { HomeWrapper } from "./HomeWrapper";
import { useContext } from "react";
import Data from "./../../Context/Data";
export default function Home() {
  const data = useContext(Data);
  const { img, title, description, job } = data.home;
  return (
    <HomeWrapper>
      <Col sm={11} md={12} lg={9} className="mt-5 mx-auto wrapper mb-5">
        <Slide>
          <div className="title">
            <h1>
              I'm <span>{title.name}</span> {title.surname}
            </h1>

            <h5>{description}</h5>
            <div className="btns">
              <a target="_blank" href={`${job.linkedin}`}>
                <FaLinkedinIn />
              </a>
              <a target="_blank" href={`${job.github}`}>
                <AiFillGithub />
              </a>
              <a target="_blank" href={`${job.telegram}`}>
                <BsTelegram />
              </a>
              <a href={`${job.twitter}`} target="_blank">
                <BsTwitter />
              </a>
            </div>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="img">
            <img src={img} />
          </div>
        </Slide>
      </Col>
    </HomeWrapper>
  );
}
