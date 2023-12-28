
import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Traffic from './Pages/Traffic';
import Landing from './Pages/Landing';
import Sidebarin from './Components/Sidebar';
import Updates from './Pages/Updates';
import Errors from './Pages/Errors';
function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Sidebarin />} >
      <Route path="/" element={<Landing />} />
      <Route path="/traffic" element={<Traffic />} />
      <Route path="/errors" element={<Errors />} />
      <Route path="/updates" element={<Updates />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
