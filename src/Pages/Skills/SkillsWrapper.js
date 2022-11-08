// Libraries
import styled from "styled-components";
import { Container } from "react-bootstrap";

const SkillsWrapper = styled(Container)`
  overflow: hidden;

  h1 {
    position: relative;
    z-index: 1;
  }

  .cols {
    height: 400px;
    .programmer-img {
      width: 100%;
      height: 100%;
      margin-top: -20px;
    }
    .logo-collection {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      position: relative;
      width: 100%;
      height: 100%;
      ul {
        animation: rotateCardsInfinity 15s linear infinite;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100px;
        height: 100px;
        margin-top: -10px;
        padding: 0;

        li {
          border-radius: 50%;
          width: 65px;
          height: 65px;
          list-style: none;
          position: absolute;
          left: -135%;
          transform-origin: 180px;
          transform: rotate(calc(360deg / 12 * var(--i)));
          cursor: pointer;
          background-color: white;
          padding: 10px;

          img {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            transform: rotate(calc(360deg / -12 * var(--i)));
          }
        }
      }
    }

    .center-logo {
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      div {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
        margin-top: -20px;
        img {
          padding: 0;
          width: 80%;
        }
        .logo-text {
          position: absolute;
          top: 30%;
          font-weight: 600;
          width: 200px;
          padding: 0;
          margin: 0;
          text-transform: uppercase;
        }
      }
    }
  }

  .skills-description {
    margin: 0px auto !important;
    padding: 0 !important ;
    h5 {
      text-align: center;
      color: white;
      margin: 10px 0;
      padding: 0;
    }
  }

  /* Responsive phone */
  @media (max-width: 500px) {
    .logo-collection {
      transform: scale(0.8);
    }
  }

  /* Animation */
  @keyframes rotateCardsInfinity {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`;
export default SkillsWrapper;
