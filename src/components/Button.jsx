import React from "react";
import styled from "styled-components";

const Button = ({ theme, children, onClick, width }) => {
  return (
    <ButtonWrapper theme={theme} onClick={onClick} width={width}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
const ButtonWrapper = styled.button`
  background-color: ${(props) => {
    if (props.theme === "black") return "#242424";
    if (props.theme === "white" || props.theme === "disabled") return "#FFF";
  }};
  color: ${(props) => {
    if (props.theme === "black") return "#FFF";
    if (props.theme === "white") return "#242424";
    if (props.theme === "disabled") return "#e5e5e5";
  }};
  border: 1px solid;
  border-color: ${(props) => {
    if (props.theme === "black") return "#FFF";
    if (props.theme === "white") return "#242424";
    if (props.theme === "disabled") return "#e5e5e5";
  }};
  font-size: 1.6rem;
  text-align: center;
  /* margin-right: 2.4rem; */
  width: ${(props) => {
    return props.width ? props.width : "11.3rem";
  }};

  height: 4.7rem;
  font-family: var(--ff-primary);
  cursor: pointer;
`;
