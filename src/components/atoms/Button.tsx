import React from "react";
import styled from "styled-components";
import { ButtonProps as Props } from "../../types/button";
import { spacing32, themePink } from "../../theme";

const ButtonContainer = styled.button`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 32px;
  font-weight: 200;
  font-family: Pacifico;
  line-height: ${spacing32};
  cursor: pointer;
  border-radius: 20px;
  text-align: center;
  border: 1px solid black;
  &:hover {
    color: black;
    border: 1px solid ${themePink};
  }
`;

const Button: React.FC<Props> = ({ text, onClick }) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

export default Button;
