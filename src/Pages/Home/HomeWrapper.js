import { Row } from "react-bootstrap";
import styled from "styled-components";

export const HomeWrapper = styled(Row)`
overflow: hidden;
margin-bottom: 80px;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      margin: 0;
      padding: 0;
      h1 {
        margin: 0;
        padding: 0;
        color: white;
        font-weight: 900 !important;
        span {
          color: #fe3e57 !important;
        }
      }
      h5 {
        margin: 5px 0;
        padding: 0;
        color: white;
      }

      .btns {
        margin: 20px 0;
      }
      a {
        border: 1px solid #fe3e57;
        margin-right: 15px;
        padding: 3px 6px;
        padding-top: 0;
        font-size: 20px;
        border-radius: 5px;
        color: white;
      }
    }
    img {
      max-width: 300px;
      max-height: 350px;
    }
  }

  @media (max-width: 618px) {
    div {
      h1 {
        margin-top: 60px !important;
        font-size: 30px;
      }
      h5 {
        font-size: 18px;
      }
      img {
        width: 100%;
      }
      a{
        margin-right: 0;
        font-size: 15px !important;
      }
    }
  }
  @media (max-width: 418px) {
    div {
      h1 {
        margin-top: 60px !important;
        font-size: 25px;
      }
      h5 {
        font-size: 13px;
      }

      a{
        margin-right: 5px !important;
      }
     
    }
  }
`;
