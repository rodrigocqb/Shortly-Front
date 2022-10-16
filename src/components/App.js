import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Home from "../pages/Home";
import PrivatePage from "../pages/PrivatePage";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";
import Ranking from "./Ranking";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken, user, setUser }}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/ranking"
            element={
              <PrivatePage>
                <Ranking />
              </PrivatePage>
            }
          />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
