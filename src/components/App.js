import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
