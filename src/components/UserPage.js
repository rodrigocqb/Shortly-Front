import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { Form } from "../common/Form";
import UserContext from "../contexts/UserContext";
import { deleteUrl, shortenUrl } from "../services/shortly";
import { FaTrashAlt } from "react-icons/fa";

export default function UserPage({ refresh, setRefresh, loader }) {
  const [url, setUrl] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { user } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    shortenUrl({ url })
      .then((res) => {
        setRefresh(!refresh);
        setDisabled(false);
        setUrl("");
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error when trying to shorten your url.");
        setDisabled(false);
      });
  }

  return (
    <main>
      <UrlForm disabled={disabled} onSubmit={handleSubmit}>
        <input
          placeholder="Links that fit your pocket :)"
          name="url"
          type="text"
          disabled={disabled}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        ></input>
        <button type="submit">Shorten Link</button>
      </UrlForm>
      <UrlsSection>
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
          <Container>
            {user.shortenedUrls?.map((value) => (
              <div key={value.id}>
                <UrlDiv>
                  <p>{value.url}</p>
                  <p>{value.shortUrl}</p>
                  <p>{`Visit count: ${value.visitCount}`}</p>
                </UrlDiv>
                <DeleteDiv>
                  <FaTrashAlt
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this URL?"
                        )
                      ) {
                        deleteUrl(value.id)
                          .then(() => {
                            setRefresh(!refresh);
                          })
                          .catch((err) => {
                            alert(
                              "There was an error when trying to delete your URL"
                            );
                            console.log(err);
                          });
                      }
                    }}
                  />
                </DeleteDiv>
              </div>
            ))}
          </Container>
        )}
      </UrlsSection>
    </main>
  );
}

const UrlForm = styled(Form)`
  max-width: 1020px;
  margin-top: 139px;
  flex-direction: row;
  justify-content: space-between;
  button {
    margin-top: 0;
  }
`;

const UrlsSection = styled.section`
  margin-top: 59px;
  width: 1020px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 42px;
  div {
    display: flex;
    align-items: center;
    height: 60px;
  }
`;

const UrlDiv = styled.div`
  width: 887px;
  background-color: #80cc74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px 0px 0px 12px;
  justify-content: space-between;
  padding: 0 94px 0 22px;
  font-size: 14px;
  color: #ffffff;
  p {
    max-width: 240px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const DeleteDiv = styled.div`
  width: 133px;
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  justify-content: center;
  svg {
    font-size: 26px;
    fill: #ea4f4f;
    cursor: pointer;
  }
`;
