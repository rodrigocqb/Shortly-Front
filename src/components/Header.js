import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const location = useLocation().pathname;

  return (
    <HeaderWrapper>
      <TopSection>
        <div>
          <PWrapper main={!(location === "/signup") ? true : false}>
            Sign In
          </PWrapper>
          <PWrapper main={location === "/signup" ? true : false}>
            Sign Up
          </PWrapper>
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
  }
  span {
    font-size: 90px;
  }
`;
