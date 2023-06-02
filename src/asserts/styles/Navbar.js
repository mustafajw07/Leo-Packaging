import styled from "styled-components";

const Wrapper = styled.main`
  .navbar input[type="checkbox"],
  .navbar .hamburger-lines {
    display: none;
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: auto;
  }

  .navbar {
    width: 100%;
    color: #f9f5f2;
    opacity: 1;
    z-index: 100;
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
  }

  .menu-items {
    order: 2;
    display: flex;
  }
  .logo {
    // order: 1;
    // font-size: 2.3rem;
    width: 130px;
    height: 96px;
  }

  .menu-items li {
    list-style: none;
    margin-left: 1.5rem;
    font-size: 1.3rem;
  }

  .navbar a {
    color: #f9f5f2;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
  }

  .navbar a:hover {
    color: #bf8f4e;
  }

  @media (max-width: 768px) {
    .navbar {
      position: relative;
      opacity: 1;
    }

    .navbar-container input[type="checkbox"],
    .navbar-container .hamburger-lines {
      display: block;
    }

    .navbar-container {
      display: block;
      position: relative;
      height: 64px;
    }

    .navbar-container input[type="checkbox"] {
      position: absolute;
      display: block;
      height: 32px;
      width: 30px;
      top: 20px;
      left: 20px;
      z-index: 5;
      opacity: 0;
      cursor: pointer;
    }

    .navbar-container .hamburger-lines {
      display: block;
      height: 28px;
      width: 35px;
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .navbar-container .hamburger-lines .line {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #bf8f4e;
    }

    .navbar-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.3s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.3s ease-in-out;
    }

    .navbar .menu-items {
      height: 100vh;
      padding-top: 100px;
      background: #2d2d2d;
      height: 100vh;
      max-width: 300px;
      transform: translate(-150%);
      display: flex;
      flex-direction: column;
      margin-left: -40px;
      padding-left: 40px;
      transition: transform 0.5s ease-in-out;
    }

    .navbar .menu-items li {
      margin-bottom: 1.8rem;
      font-size: 1.6rem;
      font-weight: 500;
    }

    .logo {
      position: absolute;
      top: 5px;
      right: 15px;
      font-size: 2.5rem;
      width: 55px;
      height: 55px;
    }
    .navbar-container input[type="checkbox"]:checked ~ .menu-items {
      transform: translateX(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
      transform: rotate(45deg);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
      transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
      transform: rotate(-45deg);
    }

    @media (max-width: 500px) {
      .navbar-container input[type="checkbox"]:checked ~ .logo {
        display: none;
      }
    }
  }
`;

export default Wrapper;
