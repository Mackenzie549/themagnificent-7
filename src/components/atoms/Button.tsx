import React from "react";
import styled from "styled-components";
import { ButtonProps as Props } from "../../types/button";


const ButtonContainer = styled.button`
  background-color: white;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
`;

const Button: React.FC<Props> = ({
  text,
  onClick
}) => {
  return (
    <ButtonContainer onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
