import React from "react";
import styled from "styled-components";
import girlPic from "./ASSESTS/TynkerComp2Pic.jpg";
import mainPic from "./ASSESTS/TynkerComp1Pic.jpg";
import fifa from "./ASSESTS/Fifa.png";

const FifaComp = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Wrapper>
            <DivOne>
              <Ball src={mainPic} />
            </DivOne>
            <DivTwo>
              <Logo src={fifa} />
              {/* <h4>Official Sponsor of the FIFA World Cup Qatar 2022 </h4> */}
              <p>
                Have you caught World Cup fever yet? With matches beginning in
                November, excitement is high all around the world. As part of
                the celebrations, Tynker from BYJU’s has teamed up with FIFA to
                promote kids coding in an all new way
              </p>
              <br />
              <p>
                When you play a match in BYJU’S Coding Cup, your team runs on
                code that you write! Can you code a smarter soccer team? You’ll
                learn a lot more by practicing and playing and of course <br />{" "}
                — scoring! Anyone of any age or skill level can play for free.
                This is a perfect way for your child to start their love of
                coding!
              </p>
              <Button>PLAY NOW</Button>
            </DivTwo>
          </Wrapper>
          <br />
          <br />
          <Wrapper2>
            <DivThree>
              <h2>
                The #1 Coding Program for Kids and <br /> Teens
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit atque laborum sint ad odio ex ducimus, blanditiis hic
                molestias explicabo.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                laborum iure rerum accusantium, molestiae incidunt odio iusto
                facilis illo reprehenderit est debitis nihil excepturi. Itaque
                aliquid necessitatibus id totam quia?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam
                magni delectus harum dicta libero facilis nostrum quod amet
                explicabo sit recusandae aperiam ea esse architecto aliquam
                ducimus, voluptas perferendis!
              </p>
              <Btn>EXPLORE CURRICULUM</Btn>
            </DivThree>
            <DivFour>
              <Girl src={girlPic} />
            </DivFour>
          </Wrapper2>
        </Holder>
      </Container>
    </div>
  );
};

export default FifaComp;

const Wrapper = styled.div`
  display: flex;
`;
const Wrapper2 = styled.div`
  display: flex;
`;

const Btn = styled.div`
  width: 200px;
  height: 30px;
  background-color: orange;
  color: white;
  font-size: 12px;
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

const DivThree = styled.div`
  width: 50%;
  height: 50%;
  /* background-color: yellow; */
`;

const DivFour = styled.div`
  width: 50%;
  height: 50%;
  /* background-color: black; */
`;

const Girl = styled.img``;
const Container = styled.div`
  width: 100%;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  overflow: hidden;
`;

const Holder = styled.div`
  width: 90%;
  height: 100%;
`;

const DivOne = styled.div`
  width: 60%;
  height: 50%;
  /* background-color: blue; */
  margin-top: 35px;
  margin-right: 30px;
`;

const DivTwo = styled.div`
  width: 40%;
  height: 50%;
`;

const Ball = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  width: 400px;
  height: 100px;
  /* background-color: pink; */
  margin-top: 30px;
`;

const Button = styled.div`
  width: 100px;
  height: 30px;
  background-color: orange;
  color: white;
  font-size: 12px;
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
