import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './routes/home';
import { Drive } from './routes/drive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drive" element={<Drive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
