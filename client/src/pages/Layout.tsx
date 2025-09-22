// src/components/Layout.tsx
import React from'react';
import { Outlet, Link } from'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 导航栏 */}
      <header style={{ padding: '1rem 2rem', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#E61E26', fontWeight: 'bold' }}>
            DayTask
          </Link>
          <Link to="/daily" style={{ textDecoration: 'none', color: '#333' }}>
            每日规划
          </Link>
          {/* 可以添加更多导航项 */}
        </nav>
      </header>
      
      {/* 主要内容区域 */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet /> {/* 渲染匹配的子路由组件 */}
      </main>
      
      {/* 页脚 */}
      <footer style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
        © {new Date().getFullYear()} DayTask - 让每一天更有价值
      </footer>
    </div>
  );
};

export default Layout;