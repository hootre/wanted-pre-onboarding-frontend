import { useLocalStorage } from "./useLocalStorage";

export const API_URL = `https://www.pre-onboarding-selection-task.shop`;

export const useUser = () => {
  const { setItem, removeItem } = useLocalStorage();

  const SignIn = async ({ email, password }) => {
    try {
      const res = await fetch(`${API_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        const accessToken = data.access_token;
        setItem("user", accessToken);
        return data;
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };
  const SignUp = async ({ email, password }) => {
    let isSuccess = false;
    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 201) {
        isSuccess = true;
        return isSuccess;
      } else {
        alert("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 에러:", error);
    }
  };
  const logOut = () => {
    removeItem("user");
  };

  return { SignUp, SignIn, logOut };
};
