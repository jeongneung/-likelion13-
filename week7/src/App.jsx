import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import EditProductModal from "./components/EditProductModal"; 

export default function App() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("home");
  const [editingProduct, setEditingProduct] = useState(null); 

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/shoes");
      let data = res.data;

      if (sortOption === "high") {
        data.sort((a, b) => b.price - a.price);
      } else if (sortOption === "low") {
        data.sort((a, b) => a.price - b.price);
      }

      setProducts(data);
    } catch (err) {
      console.error("상품 불러오기 실패:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/shoes/${id}`);
      fetchData();
    } catch (err) {
      console.error("삭제 실패:", err);
      alert("삭제 실패");
    }
  };

  useEffect(() => {
    fetchData();
  }, [sortOption]);

  return (
    <>
      <Header onSortSelect={setSortOption} />
      <Wrapper>
        <Title>AirForce</Title>

        <ProductForm onAdd={fetchData} />

        <ProductList>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onDelete={handleDelete}
              onEdit={() => setEditingProduct(product)}
            />
          ))}
        </ProductList>

        {editingProduct && (
          <EditProductModal
            product={editingProduct}
            onClose={() => setEditingProduct(null)}
            onUpdate={() => {
              fetchData();
              setEditingProduct(null);
            }}
          />
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
