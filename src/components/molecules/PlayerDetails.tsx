import React from "react";
import styled from "styled-components";
import { PlayerDetailsProps as Props } from "../../types/playerDetails";

const ContentTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconImg = styled.span`
  user-select: none;
  cursor: pointer;
  -webkit-user-select: none;
  font-size: 50px;
`;

const PlayerText = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const MagnificenceScore = styled.span`
  font-size: 14px;
  font-weight: bold;
  background-color: #f94594;
  color: white;
  padding: 3px;
  margin-top: 3px;
  border-radius: 5px;
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
