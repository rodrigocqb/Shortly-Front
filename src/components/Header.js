import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Header() {
  const { token, user } = useContext(UserContext);

  const location = useLocation().pathname;

  if (token) {
    return (
      <HeaderWrapper>
        <TopSection logged={true}>
          <div>
            <PWrapper main={true}>{`Welcome, ${user.name}`}</PWrapper>
          </div>
          <div>
            <Link to="/">
              <PWrapper>Home</PWrapper>
            </Link>
            <Link to="/ranking">
              <PWrapper>Ranking</PWrapper>
            </Link>
            <PWrapper>Logout</PWrapper>
          </div>
        </TopSection>
        <TitleSection>
          <h1>Shortly</h1>
          <span>🩳</span>
        </TitleSection>
      </HeaderWrapper>
    );
  }
  return (
    <HeaderWrapper>
      <TopSection>
        <div>
          <Link to="/signin">
            <PWrapper main={!(location === "/signup") ? true : false}>
              Sign In
            </PWrapper>
          </Link>
          <Link to="/signup">
            <PWrapper main={location === "/signup" ? true : false}>
              Sign Up
            </PWrapper>
          </Link>
        </div>
      </TopSection>
      <TitleSection>
        <h1>Shortly</h1>
        <span>🩳</span>
      </TitleSection>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  margin: 60px 10vw 0px 10vw;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.section`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: ${(props) => (props.logged ? "space-between" : "flex-end")};
  font-size: 14px;
  div {
    display: flex;
    column-gap: 25px;
  }
`;

const PWrapper = styled.p`
  color: ${(props) => (props.main ? "#5D9040" : "#9C9C9C")};
`;

const TitleSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  h1 {
    font-size: 64px;
    font-weight: 200;
  }
  span {
    font-size: 90px;
  }
`;
