// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToDailyPlanner = () => {
    navigate('/daily');
  };

  return (
  <div className="min-h-screen  bg-amber-50  w-screen grid place-items-center">


          <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg text-red-300">
            欢迎使用 DayTask
          </h1>


          <p className="text-xl mb-12 drop-shadow-sm text-red-300">
            提升每日效率，规划每一天
          </p>


          <button
            onClick={goToDailyPlanner}
            className=" bg-red-200 text-amber-50 font-bold px-10 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            开始规划
          </button>

          


    </div>
  );
};

export default Home;
