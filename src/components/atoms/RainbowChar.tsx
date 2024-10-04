import React from "react";
import styled from "styled-components";
import { RainbowCharProps as Props } from "../../types/rainbowChar";

const StyledNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0,0,0,0);
`;

const StyledNumber = styled.span`
  font-family: Pacifico;
  font-size: 196px;
  font-weight: 200;
  line-height: 200px;
  position: relative;
	background: #fff;
	mix-blend-mode: multiply;
  overflow: hidden;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  padding: 2px 4px 6px;
  &:before {
    content: "";
    position: absolute;
    top:0;right:0;bottom:0;left:-100%;
    background: white repeating-linear-gradient(90deg, #14ffe9 0%, #ffc800 16.66666%, #ff00e0 33.33333%, #14ffe9 50.0%);
    mix-blend-mode: screen;
    animation: move 1.5s linear infinite;
  }
    @keyframes move {
      0%{transform: translateX(0);}
      100%{transform: translateX(50%);}
    }
`;

const RainbowChar: React.FC<Props> = ({children}) => {
  return (
    <StyledNumberContainer>
      <StyledNumber>{children}</StyledNumber>
    </StyledNumberContainer>
  );
};

export default RainbowChar;
