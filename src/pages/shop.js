import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/Headers/PageHeader";
import HeaderImage from "../components/Headers/HeaderImage";
import Image from "../images/header-images/shop-header.jpg";
import Button from "../components/Button/Button";
import SectionWrapper from "../components/Wrappers/SectionWrapper";
import ColumnList from "../components/Column/ColumnList";
import ProductCard from "../components/Product/ProductCard";
import SEO from "../components/SEO/seo";
import { filters } from "../constants/filters";

const allValue = filters[0];

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme, option, selected }) =>
    option === selected ? theme.black : theme.grey};
  width: 80px;
  padding: 12px 14px;
  margin: 0 6px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.black};
  }

  @media (min-width: 768px) {
    padding: 14px;
    margin: 0 10px;
    width: 100px;
  }
`;

const products = require("../data/products.json"); // ambil data lokal

const Shop = () => {
  const [selected, setSelected] = useState(allValue);

  const filteredProducts =
    selected === allValue
      ? products
      : products.filter((p) => p.sex === selected);

  return (
    <Layout>
      <main>
        <SEO title="Shop" />
        <PageHeader pageName="Shop" title="Choose your sunglasses" />
        <HeaderImage image={Image} />
        <SectionWrapper>
          <FilterWrapper>
            {filters.map((filter) => (
              <StyledButton
                key={filter}
                option={filter}
                selected={selected}
                onClick={() => setSelected(filter)}
              >
                {filter}
              </StyledButton>
            ))}
          </FilterWrapper>
          <ColumnList>
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.slug}
                slug={p.slug}
                image={p.image}
                secondImage={p.secondImage || p.image}
                name={p.name}
                price={p.price}
                promoPrice={p.promoprice}
              />
            ))}
          </ColumnList>
        </SectionWrapper>
      </main>
    </Layout>
  );
};

export default Shop;
