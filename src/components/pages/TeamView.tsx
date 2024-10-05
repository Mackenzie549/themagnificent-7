import "../../App.css";
import styled from "styled-components";
import ContentTile from "../atoms/ContentTile";
import { useEffect, useState } from "react";
import RainbowChar from "../atoms/RainbowChar";
import { spacing8 } from "../../theme";
import PlayerDetails from "../molecules/PlayerDetails";

const ParentContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const PlayerPosition = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
`;

const TeamView = () => {
  const maxNumOfGk = 1;
  const maxNumOfDef = 2;
  const maxNumOfMid = 3;
  const maxNumOfFor = 1;
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [magnificenceGK, setMagnificenceGK] = useState<any[]>([]);
  const [magnificenceDef, setMagnificenceDef] = useState<any[]>([]);
  const [magnificenceMid, setMagnificenceMid] = useState<any[]>([]);
  const [magnificenceFor, setMagnificenceFor] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cors-proxy-90954623675.europe-west1.run.app/"
        );
        const result = await response.json();
        setTeams(result.teams);

        const gkArray: any[] = [];
        const defArray: any[] = [];
        const midArray: any[] = [];
        const fwdArray: any[] = [];

        console.log(result.elements);

        result.elements.forEach((player: any) => {
          switch (player.element_type) {
            case 1:
              gkArray.push(player);
              break;
            case 2:
              defArray.push(player);
              break;
            case 3:
              midArray.push(player);
              break;
            case 4:
              fwdArray.push(player);
              break;
            default:
              break;
          }
        });

        const sortedGK = gkArray.sort(
          (a, b) => b.goals_scored + b.assists - (a.goals_scored + a.assists)
        );
        const sortedDef = defArray.sort(
          (a, b) => b.goals_scored + b.assists - (a.goals_scored + a.assists)
        );
        const sortedMid = midArray.sort(
          (a, b) => b.goals_scored + b.assists - (a.goals_scored + a.assists)
        );
        const sortedFor = fwdArray.sort(
          (a, b) => b.goals_scored + b.assists - (a.goals_scored + a.assists)
        );

        setMagnificenceGK(sortedGK.slice(0, maxNumOfGk));
        setMagnificenceDef(sortedDef.slice(0, maxNumOfDef));
        setMagnificenceMid(sortedMid.slice(0, maxNumOfMid));
        setMagnificenceFor(sortedFor.slice(0, maxNumOfFor));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchData();
  }, []);
  return (
    <ParentContainer>
      <ContentTile>
        <ContentContainer>
          {isLoading ? (
            <>
              <RainbowChar>7</RainbowChar>
              <LoadingText>loading...</LoadingText>
            </>
          ) : (
            <PlayerFormation>
              <PlayerPosition>
                <PlayerDetails
                  name={"Joe Bloggs"}
                  position={"GK"}
                  team={"Man City"}
                  magnificence={1}
                />
              </PlayerPosition>
              <PlayerPosition>
                <Square />
                <Square />
              </PlayerPosition>
              <PlayerPosition>
                <Square />
                <Square />
                <Square />
              </PlayerPosition>
              <PlayerPosition>
                <Square />
              </PlayerPosition>
            </PlayerFormation>
          )}
        </ContentContainer>
      </ContentTile>
    </ParentContainer>
  );
};

export default TeamView;
