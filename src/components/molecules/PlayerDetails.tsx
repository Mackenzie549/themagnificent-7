import React from "react";
import styled from "styled-components";
import { PlayerDetailsProps as Props } from "../../types/playerDetails";
import { spacing4, themePink } from "../../theme";

const ContentTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px black;
`;

const IconImg = styled.span`
  user-select: none;
  cursor: pointer;
  -webkit-user-select: none;
  font-size: 50px;
`;

const PlayerText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const MagnificenceScore = styled.span`
  font-size: 18px;
  font-weight: bold;
  background-color: ${themePink};
  color: white;
  margin-top: ${spacing4};
  padding: 0px 4px 3px;
  border-radius: 5px;
  font-family: Pacifico;
`;

const PlayerDetails: React.FC<Props> = ({
  name,
  position,
  team,
  magnificence,
}) => {
  return (
    <ContentTileContainer>
      <IconImg className="material-icons-outlined">person</IconImg>
      <PlayerText>{name}</PlayerText>
      <PlayerText>{position}</PlayerText>
      <PlayerText>{team}</PlayerText>
      <MagnificenceScore>{magnificence}</MagnificenceScore>
    </ContentTileContainer>
  );
};

export default PlayerDetails;
