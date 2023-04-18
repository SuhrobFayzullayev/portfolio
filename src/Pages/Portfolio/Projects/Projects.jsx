// React hooks
import React, { useContext } from "react";

// Libraries
import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";

// Data Context
import Data from "./../../../Context/Data";
export default function Projects() {
  // data
  const data = useContext(Data);
  const { demos } = data.portfolio;
  let newProject = [];
  demos?.map((v) => newProject.unshift(v));


  return (
    <>
      {newProject.map((v, i) => (
        <Fade key={i + v}>
          <div className="project">
            <img src={v.img} alt="" />
            <div className="about-project">
              <h4>{v.title}</h4>
              <p>{v.description}</p>
              <div className="btns">
                <a
                  target="_blank"
                  href={`${v.sourseCode}`}
                  className="sourse me-3"
                >
                  <span></span>
                  <span></span>
                  Sourse
                </a>
                <a
                  href={`${v.demoLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo"
                >
                  <span></span>
                  <span></span>
                  Demo
                </a>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </>
  );
}
