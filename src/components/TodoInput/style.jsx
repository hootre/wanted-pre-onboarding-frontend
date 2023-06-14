import styled from "@emotion/styled";

export const TodoInputStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .add_input {
    width: 400px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    outline: none;
    letter-spacing: 1px;
    color: #fff;
  }
  button {
    background: #fff;
    height: 100%;
    border: none;
    outline: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.2s all ease;
    &:hover {
      background: #ff359b;
      color: #fff;
      font-weight: bold;
    }
  }
`;
