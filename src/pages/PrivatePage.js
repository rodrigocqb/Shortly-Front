import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function PrivatePage({ children }) {
  const { token, setToken } = useContext(UserContext);

  const navigate = useNavigate();

  const localUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!localUser) {
      navigate("/login");
    } else if (!token) {
      setToken(localUser);
    }
  }, [localUser, navigate, setToken, token]);

  if (!token) {
    return <></>;
  }

  return <>{children}</>;
}
