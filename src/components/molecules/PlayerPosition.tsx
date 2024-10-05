import React from "react";
import PlayerDetails from "../molecules/PlayerDetails";
import { element_type } from "../../types/position";
import styled from "styled-components";
import { PlayerPositionProps as Props } from "../../types/playerPositon";

const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const PlayerPosition: React.FC<Props> = ({ players, teamsById }) => {
  return (
    <PlayerContainer>
      {players.map((player, index) => (
        <PlayerDetails
          key={index}
          name={`${player.first_name} ${player.second_name}`}
          position={element_type[player.element_type]}
          team={teamsById[player.team]}
          magnificence={player.goals_scored + player.assists}
        />
      ))}
    </PlayerContainer>
  );
};

export default PlayerPosition;
