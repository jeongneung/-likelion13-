import styled from "styled-components";

export default function ProductCard({ name, price, image, brand }) {
  return (
    <Card>
      <ProductImage src={image} alt={name} />
      <BrandName>{brand}</BrandName>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price.toLocaleString()}원</ProductPrice>
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  width: 240px;
  margin: 12px;
  padding: 12px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;

const ProductName = styled.h3`
  box-sizing: border-box;
  font-size: 12px;
  margin: 10px 0 5px;
  color: black;
`;

const BrandName = styled.h3`
box-sizing:border-box;
color: rgb(34, 34, 34);
cursor:pointer;
display: flow-root;
font-size: 12px;
font-weight: 700;
height:14.4px;
`;

const ProductPrice = styled.p`
box-sizing:border-box;
color:rgb(34, 34, 34);
display:flow-root;
font-size:13px;
font-weight:700;
height:15.6px;
line-height:15.6px;
`;

