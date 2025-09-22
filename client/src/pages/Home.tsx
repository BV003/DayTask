// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToDailyPlanner = () => {
    navigate('/daily');
  };

  return (
  <div style={{
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
  width: '100vw',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center', /* 新增：让文本居中对齐 */
  padding: '20px' /* 新增：添加内边距，防止内容贴边 */
}}>


          <h1 style={{
            fontSize: '5rem',
            fontWeight: '800',
            marginBottom: '2rem',
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', /* drop-shadow-lg效果 */
            color: '#E61E26' /* red-300对应的颜色 */
          }}>
            欢迎使用 DayTask
          </h1>


          <p style={{
            fontSize: '1.25rem',
            marginBottom: '3rem',
            textShadow: '0 1px 2px rgba(199, 35, 35, 0)', /* drop-shadow-sm效果 */
            color: '#E61E26' /* red-300对应的颜色 */
          }}>
            提升每日效率，规划每一天
          </p>


          <button
            onClick={goToDailyPlanner}
            style={{
              backgroundColor: '#E61E26', /* red-600对应的颜色 */
              color: 'white',
              fontWeight: '700',
              padding: '1rem 2.5rem',
              borderRadius: '9999px', /* 圆形边框 */
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', /* shadow-lg效果 */
              transform: 'transition',
              transitionProperty: 'transform, box-shadow, background-color',
              transitionDuration: '300ms',
              border: 'none',
              cursor: 'pointer',
              outline: 'none'
            }}          
           >
            开始规划
          </button>

          


    </div>
  );
};

export default Home;
