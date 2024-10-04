import "../../App.css";
import styled from "styled-components";
import Button from "../atoms/Button";

const Heading = styled.div`
  font-size: 64px;
  font-family: Pacifico;
  font-weight: 200;
  color: white;
  display: flex;
  flex-direction: column;
  text-shadow: 0.04em 0 black, 0 0.04em black, -0.04em 0 black, 0 -0.04em black;
`;

const LargeNumber = styled.div`
  font-size: 186px;
  font-weight: 200;
  line-height: 200px;
`;

const enterApp = () => {
  console.log("Enter App");
};

const TeamView = () => {
  return (
    <Heading>
        The Magnificent
        <LargeNumber>7</LargeNumber>
    </Heading>
  );
}

export default TeamView;
