// src/App.js
import React, { useState } from 'react';
import CriticalIncidentList from '../Components/Ci';
// import TrafficErrorStats from '../components/Traffic';
import Sidebarin from '../Components/Sidebar';

const App = () => {
  // const [showCriticalIncidents, setShowCriticalIncidents] = useState(false);
  // const [showTrafficStats, setShowTrafficStats] = useState(false);

  return (
    <div className='ml-64 '>
      <Sidebarin />
      {/* <div className='ml-64'>
        <h1>Nexus SaaS Admin Dashboard</h1>
        <button onClick={() => setShowCriticalIncidents(!showCriticalIncidents)}>
          Toggle Critical Incidents
        </button>
        <button onClick={() => setShowTrafficStats(!showTrafficStats)}>
          Toggle Traffic Stats
        </button> */}
      <CriticalIncidentList />
      {/* <TrafficErrorStats isVisible={showTrafficStats} /> */}
    </div>
    // </div>
  );
};

export default App;