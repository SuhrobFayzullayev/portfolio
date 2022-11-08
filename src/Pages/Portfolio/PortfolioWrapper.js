// Libraries
import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 100px;
  column-count: 2;
  gap: 15px;
  .project {
    margin: 15px auto !important;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    h1 {
      color: white;
      font-weight: 900;
      margin-bottom: 60px;
      letter-spacing: 1.5px;
    }
    img {
      height: 300px;
      width: 100%;
    }

    .about-project {
      background-color: rgb(0, 0, 0, 0.3);
      width: 100%;
      margin: 0;
      padding: 10px 15px;
      h4 {
        margin: 0;
        padding: 0;
        color: white;
        font-weight: bold;
        letter-spacing: -1px;
      }

      p {
        margin: 5px 0;
        padding: 0;
        line-height: 20px;
        font-size: 15px;
        color: white;
      }

      .btns {
        margin-top: 10px;
        width: 60%;
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

    .h4 {
      float: right;
      margin-top: 70px;
      text-align: right;
      color: white;
      font-weight: 800;
    }
  }

  /* Responsive */
  /* Laptop */
  @media (min-width: 700px) and (max-width: 900px) {
    padding: 20px 10px;
    column-count: 2;
    .project {
      max-width: 450px;

      .about-project {
        .btns {
          width: 100%;
        }
      }
    }
  }

  /* Tablet */
  @media (max-width: 700px) {
    padding: 20px 5px;
    column-count: 1;

    .project {
      max-width: 450px;
      img {
        height: 250px;
      }

      h1 {
        margin-bottom: 20px !important;
      }

      .about-project {
        .btns {
          width: 100%;
        }
      }
    }
  }
`;
