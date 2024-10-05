import React from "react";
import styled from "styled-components";
import { ContentTileProps as Props } from "../../types/contentTile";
import { mobileBreakpoint } from "../../theme";

const ContentTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid grey;
  border-radius: 5px;
  width: 880px;
  height: 80vh;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    width: 90vw;
    height: 100%;
  }
`;

const ContentTile: React.FC<Props> = ({children}) => {
  return (
    <ContentTileContainer>
      {children}
    </ContentTileContainer>
  );
};

export default ContentTile;
