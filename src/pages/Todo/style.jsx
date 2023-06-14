import styled from "@emotion/styled";

export const TodoStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .todoList {
    width: 700px;
    height: 600px;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .logout {
    background: #fff;
    border: none;
    outline: none;
    border-radius: 15px;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.2s all ease;
    &:hover {
      background: #ff359b;
      color: #fff;
      font-weight: bold;
    }
  }
`;
