import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function ProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    rating: "",
    reviews: "",
    soldout: false,
    color: "",
    size: "",
    gender: "unisex",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/shoes`, formData);

      alert("상품 등록 완료!");
      if (onAdd) onAdd();
    } catch (err) {
      console.error("등록 실패:", err);
      alert("등록 실패");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>상품 등록</h3>
      <label>이름: <input name="name" value={formData.name} onChange={handleChange} required /></label>
      <label>가격: <input name="price" type="number" value={formData.price} onChange={handleChange} required /></label>
      <label>이미지 URL: <input name="image" value={formData.image} onChange={handleChange} required /></label>
      <label>평점: <input name="rating" type="number" step="0.1" value={formData.rating} onChange={handleChange} /></label>
      <label>리뷰 수: <input name="reviews" type="number" value={formData.reviews} onChange={handleChange} /></label>
      <label>색상: <input name="color" value={formData.color} onChange={handleChange} /></label>
      <label>사이즈: <input name="size" value={formData.size} onChange={handleChange} /></label>
      <label>성별:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="unisex">Unisex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        품절:
        <input type="checkbox" name="soldout" checked={formData.soldout} onChange={handleChange} />
      </label>
      <button type="submit">등록하기</button>
    </Form>
  );
}

const Form = styled.form`
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 14px;
  }

  input, select {
    margin-left: 8px;
    padding: 4px;
  }

  button {
    margin-top: 10px;
    padding: 6px 12px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
