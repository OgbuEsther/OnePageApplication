import React from "react";
import styled from "styled-components";
import topBg from "./ASSESTS/bg_squiggle_top.svg";
import bottomBg from "./ASSESTS/bg_squiggle_bottom.svg";
import One from "./ASSESTS/TynkerComp3Pic.jpg";
const Comp2 = () => {
  return (
    <div>
      <Container>
        <Bg src={topBg} />
        <Holder>
          <Wrapper1>
            <DivOne>
              <Boys src={One} />
            </DivOne>
            <DivTwo>
              <h1>Parents</h1>
              <p>
                Coding plays a pivotal role in our daily lives from cars and
                coffee makers to life-changing advancements in medicine,
                environmental conservation, space exploration, and much more.
              </p>
              <p>
                At Tynker, we teach kids and teens to code through both our
                self-paced, game-like courses and our teacher-led private online
                classes. With Tynker, there’s a path to coding certification for
                all ages and skill levels that will advance them to real-world
                Python, Web Dev, Data Science and more!
              </p>
              <p>Select the option that’s best for your child!</p>
            </DivTwo>
          </Wrapper1>
          <Wrapper2>
            <DivThree></DivThree>
            <DivFour></DivFour>
          </Wrapper2>
        </Holder>
      </Container>
    </div>
  );
};

export default Comp2;

const Boys = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Wrapper1 = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const DivOne = styled.div`
  width: 45%;
  height: 400px;
  /* background-color: pink; */
  margin-right: 40px;
  margin-left: 50px;
`;

const DivTwo = styled.div`
  width: 50%;
  height: 400px;
  /* background-color: green; */
  margin-right: 40px;
  margin-left: 50px;
`;

const Wrapper2 = styled.div`
  display: flex;
`;

const DivThree = styled.div`
  width: 45%;
  height: 400px;
  background-color: yellow;
  margin-right: 40px;
  margin-left: 50px;
`;

const DivFour = styled.div`
  width: 45%;
  height: 400px;
  background-color: rebeccapurple;
  margin-right: 40px;
  margin-left: 50px;
`;
const Bg2 = styled.img``;

const Bg = styled.img`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  /* height: 800px; */
  background-color: #ebfcff;
`;

const Holder = styled.div``;
