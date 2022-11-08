// Libraries
import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding: 20px 0;
  overflow: hidden;
  h1 {
    color: white;
    text-align: center;
    font-weight: 800;
    margin-top: 20px;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    div {
      margin: 10px 0;
      &.img-wrapper {
        display: flex;
        justify-content: center !important;
        img {
          max-height: 410px;
          width: 450px;
          max-width: 90%;
        }
      }

      h6,
      h5,
      p {
        color: white;
      }
      h5,
      .question {
        font-weight: 600;
      }

      .question {
        margin-top: 15px;
        margin-bottom: 5px;
      }

      .btns {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        a {
          position: relative;
          color: white;
          padding: 8px 15px;
          text-decoration: none;
          text-align: center;
          font-size: 18px;
          letter-spacing: 1.5px;
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 5px 5px rgb(0, 0, 0, 0.2);
          overflow: hidden !important;
          &::before {
            top: 0;
            left: -100%;
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.4),
              transparent
            );
            transition: 0.3s;
          }

          &:hover::before {
            left: 100%;
          }

          span {
            position: absolute;
            display: block !important;
            background-color: white;
            transition: 0.3s ease;
            width: 0;
            height: 1px;
            &:nth-child(1) {
              top: 0;
              left: 0;
            }
            &:nth-child(2) {
              bottom: 0;
              right: 0;
            }
          }

          &:hover span {
            width: 100%;
          }
        }
      }
    }
  }
`;
