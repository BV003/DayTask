// src/pages/DailyPlanner.tsx
import React from 'react';

const DailyPlanner: React.FC = () => {
  const today = new Date().toLocaleDateString();

  // 示例任务
  const tasks = [
    { text: '完成日报', completed: false },
    { text: '阅读 30 分钟', completed: true },
    { text: '运动 20 分钟', completed: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 p-6">
      {/* 页面标题 */}
      <h1 className="text-3xl font-bold mb-2 text-center">每日任务规划</h1>
      <p className="text-center mb-6 text-gray-600">{today}</p>

      {/* 任务列表展示 */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center space-x-2 mb-2 ${
                task.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              <input type="checkbox" checked={task.completed} readOnly className="w-4 h-4" />
              <span>{task.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyPlanner;
