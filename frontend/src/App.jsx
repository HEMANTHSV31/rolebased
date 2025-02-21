import React from 'react';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<AppLayout />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
