import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sports from './pages/Sports';
import Achievements from './pages/Achievements';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white fixed top-0 left-0 p-4">
      <h2 className="text-center text-2xl font-semibold mb-6">Student Dashboard</h2>
      <ul className="space-y-4"> 
  
         <li>
          <Link to="/student/dashboard" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link>
        </li>
        <li>
          <Link to="/student/sports" className="block p-2 rounded hover:bg-gray-700">Sports</Link>
        </li>
        <li>
          <Link to="/student/achievements" className="block p-2 rounded hover:bg-gray-700">Achievements</Link>
        </li>
        <li>
            <Link to="/" className="block p-2 rounded hover:bg-gray-700">logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
