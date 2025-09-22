// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToDailyPlanner = () => {
    navigate('/home');
  };

  return (

<div style={{
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
  width: '100vw',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
  padding: '20px',
  overflow: 'hidden',
  position: 'relative'
}}>
  {/* 背景装饰元素 */}
  <div style={{
    position: 'absolute',
    top: '-10%',
    right: '-10%',
    width: '40%',
    height: '40%',
    backgroundColor: '#E61E2610', // 淡红色半透明
    borderRadius: '50%',
    zIndex: 0
  }}></div>
  <div style={{
    position: 'absolute',
    bottom: '-15%',
    left: '-15%',
    width: '50%',
    height: '50%',
    backgroundColor: '#E61E2608', // 更淡的红色半透明
    borderRadius: '50%',
    zIndex: 0
  }}></div>

  {/* 主内容容器 */}
  <div style={{
    maxWidth: '800px',
    width: '100%',
    padding: '2rem',
    position: 'relative',
    zIndex: 1
  }}>
    {/* 图标/Logo */}
    <div style={{
      width: '120px',
      height: '120px',
      backgroundColor: '#d50f16ff',
      borderRadius: '20px',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 2.5rem',
      boxShadow: '0 10px 25px -5px rgba(230, 30, 38, 0.3)',
      transform: 'rotate(5deg)',
      transition: 'transform 0.3s ease'
    }} onMouseOver={(e) => {
      e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
    }} onMouseOut={(e) => {
      e.currentTarget.style.transform = 'rotate(5deg)';
    }}>
      {


      /* <span style={{
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>D</span> */

      <img 
        src="/src/assets/logo.png"
        alt="DayTask Logo" 
        style={{
          width: '80%', // 调整图片大小
          height: '80%',
          objectFit: 'contain' // 保持图片比例
        }}
      
      />

      }
      
    </div>

    <h1 style={{
      fontSize: 'clamp(2.5rem, 6vw, 5rem)', // 响应式字体大小
      fontWeight: '800',
      marginBottom: '1.5rem',
      textShadow: '0 4px 12px rgba(230, 30, 38, 0.2)',
      color: '#E61E26',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }}>
      DayTask
    </h1>

    <p style={{
      fontSize: 'clamp(1rem, 2vw, 1.25rem)', // 响应式字体大小
      marginBottom: '3rem',
      color: '#E61E26',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.6
    }}>
      We are what we repeatedly do
    </p>

    <button
      onClick={goToDailyPlanner}
      style={{
        backgroundColor: '#E61E26',
        color: 'white',
        fontWeight: '700',
        padding: '1rem 2.5rem',
        borderRadius: '9999px',
        boxShadow: '0 10px 15px -3px rgba(230, 30, 38, 0.2), 0 4px 6px -2px rgba(230, 30, 38, 0.1)',
        transition: 'all 0.3s ease',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        fontSize: '1.1rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>Start</span>
      {/* 按钮悬停光效 */}
      <span style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
        transform: 'rotate(30deg)',
        transition: 'all 0.6s ease',
        opacity: 0
      }}></span>
      
    </button>

    {/* 底部小文字 */}
    <p style={{
      marginTop: '4rem',
      fontSize: '0.9rem',
      color: '#999',
      letterSpacing: '0.5px'
    }}>
       © {new Date().getFullYear()} DayTask
    </p>


  </div>
</div>
    
  );
};

export default Home;
