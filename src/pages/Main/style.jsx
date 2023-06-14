import styled from "@emotion/styled";

export const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    .link_btn {
      text-decoration: none;
      margin: 15px;
      width: 130px;
      height: 40px;
      color: #fff;
      border-radius: 5px;
      padding: 10px 25px;
      text-align: center;
      font-weight: bold;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      outline: none;
    }
    .custom {
      background: rgb(247, 150, 192);

      line-height: 42px;
      padding: 0;
      border: none;
    }
    .custom span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }
    .custom:before,
    .custom:after {
      position: absolute;
      content: "";
      height: 0%;
      width: 1px;
      box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
        -4px -4px 5px 0px rgba(255, 255, 255, 1),
        7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    }
    .custom:before {
      right: 0;
      top: 0;
      transition: all 500ms ease;
    }
    .custom:after {
      left: 0;
      bottom: 0;
      transition: all 500ms ease;
    }
    .custom:hover {
      background: transparent;
      color: #76aef1;
      box-shadow: none;
    }
    .custom:hover:before {
      transition: all 500ms ease;
      height: 100%;
    }
    .custom:hover:after {
      transition: all 500ms ease;
      height: 100%;
    }
    .custom span:before,
    .custom span:after {
      position: absolute;
      content: "";
      box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
        -4px -4px 5px 0px rgba(255, 255, 255, 1),
        7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    }
    .custom span:before {
      left: 0;
      top: 0;
      width: 0%;
      height: 0.5px;
      transition: all 500ms ease;
    }
    .custom span:after {
      right: 0;
      bottom: 0;
      width: 0%;
      height: 0.5px;
      transition: all 500ms ease;
    }
    .custom span:hover:before {
      width: 100%;
    }
    .custom span:hover:after {
      width: 100%;
    }
  }
`;
