// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DailyPlanner from './pages/DailyPlanner';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 启动展示界面 */}
        <Route path="/" element={<Home />} />

        {/* 每日任务规划页面 */}
        <Route path="/daily" element={<DailyPlanner />} />

      </Routes>
    </Router>
  );
};

export default App;
