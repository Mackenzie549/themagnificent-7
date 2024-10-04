import "../../App.css";
import styled from "styled-components";
import Button from "../../components/atoms/Button";

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
    window.location.href = "/team";
};

const Home = () => {
  return (
    <div className="App">
        <header className="App-header">
        <Heading>
            The Magnificent
            <LargeNumber>7</LargeNumber>
        </Heading>
        </header>
        <Button text="Enter" onClick={enterApp}></Button>
    </div>
  );
}

export default Home;
