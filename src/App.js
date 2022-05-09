import './App.css';
import { Routes, Route } from "react-router-dom";
import MainLanding from './MainLanding/MainLanding';
import BSLanding from './Bootstrap/BSLanding/BSLanding.jsx'
import AdrienT from './Bootstrap/pages/AdrienT/AdrienT.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<MainLanding />} />
      <Route path="/bootstrap" element={<BSLanding />} />
      <Route path="/adrien" element={<AdrienT />} />
      </Routes>
    </div>
  );
}

export default App;
