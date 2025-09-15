import { useEffect } from "react";
import { initGA, trackPageView } from "./middleware/Analytics.js";

import './App.css';
import Cables from './screen/cables/Cables';
import Control from './screen/control/Control';
import Home from './screen/home/Home';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ParkingBrakes from './screen/parkingBrakes/ParkingBrakes';
import Starters from './screen/starters/Starters';
import Alternators from './screen/alternators/Alternators';
import Batteries from './screen/batteries/Batteries';

// This component lives inside BrowserRouter
function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* Tracking component must live inside Router */}
        <AnalyticsListener />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cables" element={<Cables />} />
          <Route path="/control-lever" element={<Control />} />
          <Route path="/parkingBrakes" element={<ParkingBrakes />} />
          <Route path="/starters" element={<Starters />} />
          <Route path="/alternators" element={<Alternators />} />
          <Route path="/batteries" element={<Batteries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
