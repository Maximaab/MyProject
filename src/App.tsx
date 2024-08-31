import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Front } from "./layout/frontpart/Frontpart";
import { KatalogOfProduction } from "./layout/sections/katalog/Katalog";
import { KatalogPart } from "./layout/sections/katalog/KatalogPart/KatalogPart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/katalog" element={<KatalogPart />} />
      
    </Routes>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e62263;
`;
