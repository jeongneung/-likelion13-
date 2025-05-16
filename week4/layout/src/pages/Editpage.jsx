// pages/EditPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem('userName') || '홍길동';
    setName(savedName);
  }, []);

  const handleSave = () => {
    localStorage.setItem('userName', name);
    navigate('/my-page');
  };

  return (
    <div>
      <h2>이름 수정</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>저장</button>
    </div>
  );
};

export default EditPage;
