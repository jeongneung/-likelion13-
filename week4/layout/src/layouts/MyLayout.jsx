// MyLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const MyLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/my-page">내 계정</Link>
        </nav>
      </header>
      <main>
        <Outlet /> {/* 자식 페이지를 여기에 렌더링 */}
      </main>
    </div>
  );
};

export default MyLayout;
