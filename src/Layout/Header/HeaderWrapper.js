// Libraries
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const HeaderWrapper = styled(Navbar)`
  background: #0b0952;
  padding: 0;
  img {
    width: 60px;
    margin-left: -10px;
    padding: 0 !important;
  }
  .logo-text {
    font-weight: 600 !important;
  }
  .navbar-toggler {
    padding: 0;
    box-shadow: none;
    cursor: pointer;
    border: none;

    div {
      display: none;
      width: 25px;
      height: 3px;
      background: #f2f5f7;
      margin: 5px;
      transition: all 0.3s ease;
    }
    &.show {
      .line-1 {
        transform: rotate(-45deg) translate(-5px, 6px);
      }
      .line-2 {
        transition: all 0.2s ease;
        width: 0;
      }
      .line-3 {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  }

  .link-wrapper {
    text-align: center;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 0 !important;
    .nav-link {
      margin: 0 10px;
      color: white !important;
      position: relative;
      width: fit-content;
      &.active::after {
        display: block;
        width: 100%;
        opacity: 0.9;
      }

      &:after {
        content: "";
        display: block;
        height: 2px;
        left: 0;
        position: absolute;
        background: #fe3d58;
        opacity: 0.6;
        transition: width 0.3s ease 0s, opacity 0.3s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 100%;
        opacity: 0.9;
      }
    }
    .lets-talk-btn {
      border: transparent;
      background-color: #fe3d58;
    }
  }

  /* Responsive Code */
  /* Tablet */
  @media (max-width: 768px) {
    .link-wrapper {
      padding-bottom: 20px !important;
    }
    .navbar-toggler div {
      display: block !important;
    }
  }

  /* Phone */
  @media (max-width: 576px) {
    .header-container {
      padding: 0px 20px !important;
    }
  }
`;
