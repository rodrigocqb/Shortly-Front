import { useContext, useEffect, useState } from "react";
import Ranking from "../components/Ranking";
import UserPage from "../components/UserPage";
import UserContext from "../contexts/UserContext";
import { useLocal } from "../hooks/useLocal";
import { getUserData } from "../services/shortly";

export default function Home() {
  const { token, setUser } = useContext(UserContext);
  const [refresh, setRefresh] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (token) {
      setLoader(true);
      getUserData()
        .then((res) => {
          setUser(res.data);
          setLoader(false);
        })
        .catch((err) => {
          alert("There was an error loading your data");
          console.log(err);
          setLoader(false);
        });
    }
  }, [token, setUser, refresh]);

  useLocal();

  if (token) {
    return (
      <>
        <UserPage refresh={refresh} setRefresh={setRefresh} loader={loader} />
      </>
    );
  }

  return (
    <>
      <Ranking />
    </>
  );
}
