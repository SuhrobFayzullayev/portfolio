// Libraries
import styled from "styled-components";

export const LetsTalkWrapper = styled.div`
  overflow: hidden;
  background-color: #070640;
  height: 100%;
  padding: 50px 0;
  .row {
    justify-content: center;
    .left-side {
      background-color: #0c0b44;
      backdrop-filter: blur(55px) saturate(100%) brightness(100%);
      padding: 30px;
      border: 1px solid #3f3e46;
      border-radius: 3px;

      input,
      textarea {
        padding: 5px 0 !important;
        margin: 5px 0;
        font-size: 13px;
        background: transparent;
        outline: none;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid #3f3e46;
        color: white;
        box-shadow: none !important;
        &::placeholder {
          color: white;
          font-weight: 400 !important;
        }
      }

      .send-btn {
        width: fit-content;
        border-radius: 20px;
        font-size: 14px;
        padding: 5px 20px;
      }

      .recaptcha {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(0.8);
      }
    }
    .right-side {
      padding: 0;

      .card {
        margin-bottom: 25px;
        width: 100%;
        height: fit-content;
        background-color: #0c0b44;
        border-color: #3f3e46;
        padding: 20px 10px;
        .card-header {
          border: none;
          color: white;
        }
        .card-body {
          margin-top: -10px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .icon {
            width: 40px;
            height: 40px;
            padding: 0;
            border-radius: 50%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            margin-right: 10px;
          }
          .card-text {
            font-size: 13px;
            color: #cccccc;
          }
        }
      }
    }
  }
`;
