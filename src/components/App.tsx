import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import User from './User';
import "./App.css";

const App: React.FC = () =>  {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;