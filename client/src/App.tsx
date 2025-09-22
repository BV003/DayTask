// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DailyPlanner from './pages/DailyPlanner';
import Layout from './pages/Layout';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 启动展示界面 */}
        <Route path="/" element={<Home />} />

        {/* 每日任务规划页面 */}
        {/* <Route path="/daily" element={<DailyPlanner />} /> */}
        <Route path="/home" element={<Layout />} />




      </Routes>
    </Router>
  );
};

export default App;
