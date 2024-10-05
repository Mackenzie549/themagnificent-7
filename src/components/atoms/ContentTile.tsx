import React from "react";
import styled from "styled-components";
import { ContentTileProps as Props } from "../../types/contentTile";

const ContentTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid grey;
  border-radius: 5px;
  width: 880px;
  height: 80vh;
`;

const ContentTile: React.FC<Props> = ({children}) => {
  return (
    <ContentTileContainer>
      {children}
    </ContentTileContainer>
  );
};

export default ContentTile;
