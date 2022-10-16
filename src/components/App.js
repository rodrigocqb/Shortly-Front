import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Home from "../pages/Home";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";
import SignIn from "./SignIn";

function App() {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken }}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
