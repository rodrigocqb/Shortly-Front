import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function useLocal() {
  const { setToken } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      setToken(localUser);
      navigate("/");
    }
  }, [navigate, setToken]);
}

export { useLocal };
