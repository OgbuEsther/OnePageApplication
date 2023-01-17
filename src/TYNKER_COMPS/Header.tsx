import React from "react";
import styled from "styled-components";
import Tynker from "./ASSESTS/tynker_logo.png";
const Header = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Logo src={Tynker} />
          <NavHold>
            <Nav>PLAY</Nav>
            <Nav>PARENTS</Nav>
            <Nav>EDUCATORS</Nav>
            <Nav>WHY CODE?</Nav>
            <Nav>GIFT</Nav>
          </NavHold>
          <ButtonHold>
            <Btn_One>START FOR FREE</Btn_One>
            <Btn_Two>LOG IN</Btn_Two>
          </ButtonHold>
        </Holder>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: #1650a5; */
  background-color: #164fa1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const NavHold = styled.div`
  display: flex;
`;

const Nav = styled.div`
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin-left: 30px;
  margin-right: 30px;
`;

const Logo = styled.img`
  /* background-color: red; */
  width: 200px;
  height: 20px;
`;

const ButtonHold = styled.div`
  display: flex;
`;

const Btn_One = styled.div`
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  height: 30px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    background-color: lightgreen;
  }
`;

const Btn_Two = styled.div`
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  height: 30px;

  cursor: pointer;
  :hover {
    background-color: lightgreen;
  }
`;
