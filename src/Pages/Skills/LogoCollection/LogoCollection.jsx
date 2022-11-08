// React hooks
import React, { useContext } from "react";

// Libraries
import { Slide } from "react-awesome-reveal";

// Data Context
import Data from "../../../Context/Data";

export default function LogoCollection() {
  // data
  const data = useContext(Data);
  const { logos, logoText, centerLogo } = data.skills;
  
  return (
    <Slide direction="right" className="cols col-md-6 col-sm-6 mx-auto">
      <div className="logo-collection">
        <div className="center-logo">
          <div>
            <img src={centerLogo} alt="" />
            <h4 className="logo-text text-white text-center">{logoText}</h4>
          </div>
        </div>
        <ul>
          {logos.map((v, i) => (
            <li key={i} style={{ "--i": i + 1 }}>
              <img src={v.value} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </Slide>
  );
}
