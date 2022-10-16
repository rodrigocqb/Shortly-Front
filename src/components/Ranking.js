import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { getRanking } from "../services/shortly";

export default function Ranking() {
  const [loader, setLoader] = useState(false);
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    setLoader(true);
    getRanking()
      .then((res) => {
        setRanking(res.data);
        setLoader(false);
      })
      .catch((err) => {
        alert("An error has occurred when trying to load the ranking");
        setLoader(false);
        console.log(err);
      });
  }, []);

  return (
    <MainWrapper>
      <SubtitleSection>
        <span>🏆</span>
        <h1>Ranking</h1>
      </SubtitleSection>
      <RankingSection loader={loader}>
        {loader ? (
          <>
            <ThreeDots
              height="20"
              width="81"
              color="#78B159"
              ariaLabel="three-dots-loading"
            />
          </>
        ) : (
          <>
            {ranking.map((value, index) => (
              <UserWrapper key={value.id}>
                <p>{`${index + 1}. ${value.name} - ${
                  value.linksCount
                } links - ${value.visitCount} views`}</p>
              </UserWrapper>
            ))}
          </>
        )}
      </RankingSection>
      <CreateAccountSection>
        <h1>Create an account to use our service!</h1>
      </CreateAccountSection>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  margin-top: 74px;
  h1 {
    font-size: 36px;
    font-weight: 700;
  }
`;

const SubtitleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 57px;
  span {
    font-size: 50px;
  }
`;

const RankingSection = styled.section`
  width: 1017px;
  min-height: 240px;
  background-color: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.loader ? "center" : "flex-start")};
  padding: 20px 40px;
  row-gap: 13px;
`;

const UserWrapper = styled.div`
  width: 100%;
  p {
    font-size: 22px;
    font-weight: 500;
  }
`;

const CreateAccountSection = styled.section`
  margin-top: 83px;
`;
