import { BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
