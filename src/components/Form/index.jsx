import { FilledInput, FormControl, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { LoginFormStyled } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const Form = ({ type }) => {
  const navigate = useNavigate();
  // form state
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // 유효성 검사
  const [checkForm, setCheckForm] = useState(false);
  useEffect(() => {
    if (values.email.includes("@") && values.password.length >= 8) {
      setCheckForm(true);
    } else {
      setCheckForm(false);
    }
  }, [values]);

  //auth
  const { SignIn, SignUp } = useUser();
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!checkForm) {
      return;
    }
    const isSuccess = await SignIn(values);
    if (isSuccess) {
      navigate("/todo");
      navigate(0);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!checkForm) {
      return;
    }
    const isSuccess = await SignUp(values);
    if (isSuccess) {
      navigate("/signin");
    }
  };
  return (
    <LoginFormStyled>
      <div className="form">
        <h2>{type === "signIn" ? "SIGN IN" : "SIGN UP"}</h2>
        <form
          onSubmit={type === "signIn" ? handleSignIn : handleSignUp}
          method="post"
        >
          <div className="inputBox">
            <FormControl sx={{ m: 1 }} variant="outlined" className="inputItem">
              <InputLabel htmlFor="filled-adornment-text" className="label">
                Email
              </InputLabel>
              <FilledInput
                id="filled-adornment-text"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange("email")}
                data-testid="email-input"
                className="inputBack"
              />
            </FormControl>
          </div>
          <div className="inputBox">
            <FormControl sx={{ m: 1 }} variant="outlined" className="inputItem">
              <InputLabel htmlFor="filled-adornment-password" className="label">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange("password")}
                data-testid="password-input"
                className="inputBack"
              />
            </FormControl>
          </div>
          <div className="inputBox">
            <button
              className={`submit ${checkForm && "possible"}`}
              type="submit"
              data-testid={
                type === "signIn" ? "signin-button" : " signup-button"
              }
              disabled={!checkForm}
            >
              {type === "signIn" ? "SIGN IN" : " SIGN UP"}
            </button>
          </div>
          {type === "signIn" ? (
            <p className="forget">
              아이디가 없으신가요? ? <Link to="/signup"> 회원가입 </Link>
            </p>
          ) : (
            <p className="forget">
              아이디가 기억이 나셨다면 ? <Link to="/signin"> 로그인 </Link>
            </p>
          )}
        </form>
      </div>
    </LoginFormStyled>
  );
};
