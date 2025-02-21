import React from 'react';
import { Link } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import Announcements from './pages/Announcements';
// import Reports from './pages/Reports';
// import Security from './pages/Security';

const Asidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white fixed top-0 left-0 p-4">
      <h2 className="text-center text-2xl font-semibold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/admin/announcements" className="block p-2 rounded hover:bg-gray-700">Announcements</Link>
        </li>
        <li>
          <Link to="/admin/reports" className="block p-2 rounded hover:bg-gray-700">Reports</Link>
        </li>
        <li>
          <Link to="/admin/security" className="block p-2 rounded hover:bg-gray-700">Security</Link>
        </li>
        <li>
          <Link to="/" className="block p-2 rounded hover:bg-gray-700">logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Asidebar;
