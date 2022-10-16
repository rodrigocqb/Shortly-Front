import { useContext, useEffect } from "react";
import Ranking from "../components/Ranking";
import UserContext from "../contexts/UserContext";
import { useLocal } from "../hooks/useLocal";
import { getUserData } from "../services/shortly";

export default function Home() {
  const { token, setUser } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      getUserData()
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          alert("There was an error loading your data");
          console.log(err);
        });
    }
  }, [token, setUser]);

  useLocal();

  return (
    <>
      <Ranking />
    </>
  );
}
