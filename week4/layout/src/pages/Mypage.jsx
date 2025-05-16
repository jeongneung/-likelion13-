// pages/MyPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('userName') || '이정능능';
    setName(savedName);
  }, []);

  return (
    <div>
      <h2>내 계정</h2>
      <p>이름: {name}</p>
      <Link to="/my-page/edit">이름 수정하기</Link>
    </div>
  );
};

export default MyPage;
