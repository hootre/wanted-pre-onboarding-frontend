import styled from "@emotion/styled";

export const AppLayoutStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(to bottom, #bebec0, #f5f5f5);
  .color {
    position: absolute;
    filter: blur(400px);
    &:nth-of-type(1) {
      top: -350px;
      width: 100%;
      height: 600px;
      background: #ff359b;
    }
    &:nth-of-type(2) {
      bottom: -150px;
      left: 0px;
      width: 500px;
      height: 500px;
      background: #c7c571;
    }
    &:nth-of-type(3) {
      bottom: 50px;
      right: 100px;
      width: 300px;
      height: 300px;
      background: #00d2ff;
    }
  }
  .box {
    position: relative;
    .container {
      position: relative;
      width: 1200px;
      height: 100vh;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(5px);
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;
export const BackSquareBox = styled.div`
  position: absolute;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  animation: animate 10s linear infinite;
  animation-delay: calc(-1s * ${(props) => props.num});
  @keyframes animate {
    0%,
    100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
  }
  &:nth-of-type(1) {
    top: -50px;
    right: -60px;
    width: 100px;
    height: 100px;
  }
  &:nth-of-type(2) {
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
    z-index: 2;
  }
  &:nth-of-type(3) {
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
  }
  &:nth-of-type(4) {
    bottom: -80px;
    left: 100px;
    width: 50px;
    height: 50px;
  }
  &:nth-of-type(5) {
    top: -80px;
    left: 140px;
    width: 60px;
    height: 60px;
  }
`;
