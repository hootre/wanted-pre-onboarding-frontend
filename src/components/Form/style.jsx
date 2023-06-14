import styled from "@emotion/styled";

export const LoginFormStyled = styled.div`
  overflow: hidden;

  .form {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px;
    h2 {
      position: relative;
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 40px;
      &:before {
        content: "";
        position: absolute;
        width: 80px;
        height: 4px;
        background: #fff;
        left: 0;
        bottom: -10px;
      }
    }
    .inputBox {
      width: 100%;
      margin-top: 20px;
      > div {
        margin-left: 0;
      }
      .label {
        top: -5px;
        left: 5px;
        color: #fff;
        &[data-shrink="true"] {
          color: #1976d2;
          & ~ .inputBack input {
            border: 2px solid #69a5e0;
          }
        }
      }
      .inputBack {
        background: none;
        &:before,
        &:after {
          display: none;
        }
      }
      input,
      .submit {
        width: 100%;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        outline: none;
        padding: 10px 20px;
        border-radius: 35px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        font-size: 16px;
        letter-spacing: 1px;
        color: #fff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        transition: 0.2s;
        &.submit {
          background: #eee;
          color: #999;
          max-width: 150px;
          cursor: pointer;
          margin-bottom: 20px;
          font-weight: 600;
        }
        &.possible {
          background: skyblue;
          color: #fff;
        }
      }
    }
    .forget {
      margin-top: 5px;
      color: #eee;
      a {
        color: #eee;
        font-weight: 600;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
