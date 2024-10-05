import "../../App.css";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { mobileBreakpoint, spacing32, themePink } from "../../theme";
import RainbowChar from "../atoms/RainbowChar";

const ParentContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  font-size: 72px;
  font-family: Pacifico;
  font-weight: 200;
  color: ${themePink};
  display: flex;
  flex-direction: column;
  text-shadow: 0em 0 black, 0 0.01em black, -0.01em 0 black, 0 -0.04em black;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    font-size: 48px;
  }
`;

const ButtonContainer = styled.div`
  margin: ${spacing32};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const enterApp = () => {
  window.location.href = "/team";
};

const Home = () => {
  return (
    <div className="App">
      <ParentContainer>
        <Heading>The Magnificent</Heading>
        <RainbowChar>7</RainbowChar>
        <ButtonContainer>
          <Button text="Enter" onClick={enterApp}></Button>
        </ButtonContainer>
      </ParentContainer>
    </div>
  );
};

export default Home;
