import React from "react";
import styled from "styled-components";
import { HeadingProps as Props } from "../../types/heading";
import { themePink } from "../../theme";

const HeadingText = styled.div`
  font-size: 64px;
  font-family: Pacifico;
  font-weight: 200;
  color: ${themePink};
  display: flex;
  flex-direction: column;
  text-shadow: 0.0em 0 black, 0 0.01em black, -0.01em 0 black, 0 -0.04em black;
`;

const Heading: React.FC<Props> = ({children}) => {
  return (
    <HeadingText>{children}</HeadingText>
  );
};

export default Heading;
