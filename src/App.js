import './App.css';
import { Routes, Route } from "react-router-dom";
import MainLanding from './MainLanding/MainLanding';
import BSLanding from './Bootstrap/BSLanding/BSLanding.jsx'
import WarriorCats from './Bootstrap/pages/WarriorCats/WarriorCats.jsx'
import IvoryCloud from './Bootstrap/pages/IvoryCloud/IvoryCloud';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<MainLanding />} />
      <Route path="/bootstrap" element={<BSLanding />} />
      <Route path="/warriorcats" element={<WarriorCats />} />
      <Route path="/ivorycloud" element={<IvoryCloud />} />

      </Routes>
    </div>
  );
}

export default App;
