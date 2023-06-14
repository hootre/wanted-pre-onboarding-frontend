import React, { useEffect } from "react";
import { AppLayoutStyled, BackSquareBox } from "./style";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const backSquare = [0, 1, 2, 3, 4];
export const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();
  useEffect(() => {
    const user = getItem("user");
    if (user) {
      navigate("/todo");
    }
  }, []);
  return (
    <AppLayoutStyled>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
        {backSquare.map((item, index) => {
          return (
            <BackSquareBox
              key={index}
              className="square"
              num={item}
            ></BackSquareBox>
          );
        })}
        <div className="container">{children}</div>
      </div>
    </AppLayoutStyled>
  );
};
