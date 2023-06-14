import React from "react";
import { MainStyled } from "./style";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <MainStyled>
      <div>
        <Link to="/signin" className="link_btn custom">
          <span>SIGN IN</span>
        </Link>
        <Link to="/signup" className="link_btn custom">
          <span>SIGN UP</span>
        </Link>
      </div>
    </MainStyled>
  );
};
