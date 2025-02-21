import React from 'react';
import { Link } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import Lectures from './pages/Lectures';
// import Attendance from './pages/Attendance';

const Fsidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white fixed top-0 left-0 p-4">
      <h2 className="text-center text-2xl font-semibold mb-6">Faculty Dashboard</h2>
      <ul className="space-y-4">
        
        <li>
          <Link to="/faculty/lectures" className="block p-2 rounded hover:bg-gray-700">Lectures</Link>
        </li>
        <li>
          <Link to="/faculty/attendance" className="block p-2 rounded hover:bg-gray-700">Attendance</Link>
        </li>
        <li>
          <Link to="/faculty/assessments" className="block p-2 rounded hover:bg-gray-700">Assessments</Link>
        </li>
        <li>
            <Link to="/" className="block p-2 rounded hover:bg-gray-700">logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Fsidebar;
