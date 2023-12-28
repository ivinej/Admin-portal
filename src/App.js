
import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Traffic from './Pages/Traffic';
import Landing from './Pages/Landing';

function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/traffic" element={<Traffic />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
