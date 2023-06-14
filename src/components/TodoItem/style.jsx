import styled from "@emotion/styled";

export const TodoItemStyled = styled.li`
  color: #fff;
  font-size: 25px;
  margin: auto;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  position: relative;
  button {
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
    }
  }
  .todo_content {
    width: 100%;
    display: flex;
    position: relative;
    margin: 10px;
    .update_input {
      width: 100%;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      outline: none;
      letter-spacing: 1px;
      color: #fff;
    }
  }
  .todo {
    display: block;
    padding: 20px 30px;
    margin: 0 auto;
    cursor: pointer;
    &.update {
      z-index: -100;
    }
  }

  .todo__state {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .todo__text {
    width: 100%;
    text-align: left;
    color: saturate(#1b4a4e, 15%);
    transition: all 0.8s ease;
    padding: 10px;
    z-index: 10;
    &.update {
      transition-delay: 0s;
      color: #5ebec1;
      opacity: 0.6;
    }
    border-bottom: solid 1px #ddd;
    &:last-child {
      border-bottom: none;
    }
  }

  .todo__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    fill: none;
    stroke: #27fdc7;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .todo__line,
  .todo__box,
  .todo__check {
    transition: stroke-dashoffset 0.8s cubic-bezier(0.9, 0, 0.5, 1);
  }

  .todo__circle {
    stroke: #27fdc7;
    stroke-dasharray: 1 6;
    stroke-width: 0;

    transform-origin: 13.5px 12.5px;
    transform: scale(0.4) rotate(0deg);
    animation: none 0.8s linear; //cubic-bezier(.08,.56,.04,.98);

    @keyframes explode {
      //0% { stroke-width: 0; transform: scale(0.5) rotate(0deg); }
      30% {
        stroke-width: 3;
        stroke-opacity: 1;
        transform: scale(0.8) rotate(40deg);
        //animation-timing-function: cubic-bezier(.89,.01,.95,.51);
      }
      100% {
        stroke-width: 0;
        stroke-opacity: 0;
        transform: scale(1.1) rotate(60deg);
        //animation-timing-function: cubic-bezier(.08,.56,.04,.98);
      }
    }
  }

  .todo__box {
    stroke-dasharray: 56.1053, 56.1053;
    stroke-dashoffset: 0;
    transition-delay: 0.8s * 0.2;
  }
  .todo__check {
    stroke: #27fdc7;
    stroke-dasharray: 9.8995, 9.8995;
    stroke-dashoffset: 9.8995;
    transition-duration: 0.8s * 0.4;
  }
  .todo__line {
    stroke-dasharray: 168, 1684;
    stroke-dashoffset: 168;
  }
  .todo__circle {
    animation-delay: 0.8s * 0.7;
    animation-duration: 0.8s * 0.7;
  }

  .todo__state:checked {
    ~ .todo__icon .todo__box {
      stroke-dashoffset: 56.1053;
      transition-delay: 0s;
    }
    ~ .todo__icon .todo__line {
      stroke-dashoffset: -8;
    }
    ~ .todo__icon .todo__check {
      stroke-dashoffset: 0;
      transition-delay: 0.8s * 0.6;
    }
    ~ .todo__icon .todo__circle {
      animation-name: explode;
    }
  }
`;
