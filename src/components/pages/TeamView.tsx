import "../../App.css";
import styled from "styled-components";
import ContentTile from "../atoms/ContentTile";
import { useEffect, useMemo, useState } from "react";
import RainbowChar from "../atoms/RainbowChar";
import { spacing24, spacing8 } from "../../theme";
import PlayerPosition from "../molecules/PlayerPosition";
import { categorisePlayersByPosition } from "../../utils/playerUtils";
import { fetchTeamData } from "../../services/api";
import Heading from "../atoms/Heading";

const ParentContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing24};
`;

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const PlayerFormation = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  gap: ${spacing8};
  height: 100%;
  width: 100%;
  background-color: #5fa941;
`;

const TeamView = () => {
  const [teams, setTeams] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const maxNumOfGk = 1;
  const maxNumOfDef = 2;
  const maxNumOfMid = 3;
  const maxNumOfFor = 1;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchTeamData();
        setTeams(result.teams);
        setPlayers(result.elements);
      } catch (error) {
        console.error("Error fetching team data", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const teamsById = useMemo(() => {
    const map: Record<number, string> = {};
    teams.forEach((team) => {
      map[team.id] = team.name;
    });
    return map;
  }, [teams]);

  const { goalkeepers, defenders, midfielders, forwards } = useMemo(() => {
    const limits = {
      goalkeepers: maxNumOfGk,
      defenders: maxNumOfDef,
      midfielders: maxNumOfMid,
      forwards: maxNumOfFor,
    };
    return categorisePlayersByPosition(players, limits);
  }, [players, maxNumOfGk, maxNumOfDef, maxNumOfMid, maxNumOfFor]);

  return (
    <ParentContainer>
      <Heading>The Magnificent 7</Heading>
      <ContentTile>
        <ContentContainer>
          {isLoading ? (
            <>
              <RainbowChar>7</RainbowChar>
              <LoadingText>loading...</LoadingText>
            </>
          ) : (
            <PlayerFormation>
              <PlayerPosition players={goalkeepers} teamsById={teamsById} />
              <PlayerPosition players={defenders} teamsById={teamsById} />
              <PlayerPosition players={midfielders} teamsById={teamsById} />
              <PlayerPosition players={forwards} teamsById={teamsById} />
            </PlayerFormation>
          )}
        </ContentContainer>
      </ContentTile>
    </ParentContainer>
  );
};

export default TeamView;
