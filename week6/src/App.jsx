import React, { useState, useEffect } from "react";
import { products as initialProducts } from "./data/Products";
import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState("home");

  useEffect(() => {
    let sorted = [...initialProducts];

    if (sortOption === "high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "low") {
      sorted.sort((a, b) => a.price - b.price);
    }

    setProducts(sorted);
  }, [sortOption]);

  return (
    <>
      <Header onSortSelect={setSortOption} />

      <Wrapper>
        <Title>AirForce</Title>
        <ProductList>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              brand={product.brand}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </ProductList>
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
