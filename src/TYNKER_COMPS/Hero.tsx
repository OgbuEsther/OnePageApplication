import React from "react";
import styled from "styled-components";
import heroPic from "./ASSESTS/hero.png";
import wavepic from "./ASSESTS/waves.svg";
import vidicon from "./ASSESTS/video_play_icon.svg";
const Hero = () => {
  return (
    <div>
      <Container>
        <Holder>
          <DivOne>
            <h1>Coding For Kids and Teens Made Easy</h1>
            <p>
              The fun way to learn programming and develop <br />{" "}
              problem-solving & critical thinking skills!
            </p>
            <Button>GET STARTED FOR FREE</Button>
          </DivOne>
          <DivTwo>
            <Main src={heroPic} />
            <Icon src={vidicon} />
          </DivTwo>
        </Holder>
      </Container>
      <DivThree>
        <Wave src={wavepic} />
      </DivThree>
    </div>
  );
};

export default Hero;

const DivThree = styled.div`
  /* background-color: black;
  position: absolute;
  top: 90%; */
`;

const Wave = styled.img`
  position: absolute;
  top: 88%;
  /* background-color: black; */
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  /* height: 400px; */
  background-color: #2f88db;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Holder = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  position: relative;
  /* background-color: black; */
  justify-content: space-between;
`;

const DivOne = styled.div`
  width: 480px;
  /* background-color: rebeccapurple; */
  height: 500px;

  h1 {
    color: white;
    font-size: 50px;
    font-weight: bold;
    /* margin-top: 40px; */
  }

  p {
    color: white;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const DivTwo = styled.div`
  width: 700px;
  /* background-color: aqua; */
  height: 500px;
`;

const Button = styled.div`
  width: 250px;
  height: 50px;
  background-color: orange;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: darkorange;
  }
`;

const Main = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  position: relative;
  margin-top: 20px;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  right: 30%;
  cursor: pointer;
`;
