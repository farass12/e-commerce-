import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import HeroSection from "../components/Headers/HeroSection";
import Heading from "../components/Heading/Heading";
import Paragraph from "../components/Paragraph/Paragraph";
import Button from "../components/Button/Button";
import SectionWrapper from "../components/Wrappers/SectionWrapper";
import ColumnList from "../components/Column/ColumnList";
import ProductCard from "../components/Product/ProductCard";
import FlexWrapper from "../components/Wrappers/FlexWrapper";
import ContentWrapper from "../components/Wrappers/ContentWrapper";
import ImagesSection from "../components/ImagesSection/ImagesSection";
import ImageTransitionSection from "../components/ImageTransitionSection/ImageTransitionSection";
import SEO from "../components/SEO/seo";

import BeforeImg from "../images/transition-images/3.jpg";
import AfterImg from "../images/transition-images/4.jpg";
import FirstImage from "../images/section-images/homepage-1.jpg";
import SecondImage from "../images/section-images/homepage-2.jpg";

const StyledButton = styled(Button)`
  margin: 40px 0 40px auto;

  @media (min-width: 1024px) {
    margin: 40px auto 40px 0;
  }
`;

const products = require("../data/products.json"); // ambil data lokal

const IndexPage = () => {
  const recentProducts = products.slice(0, 3); // ambil 3 produk terbaru

  return (
    <Layout>
      <SEO title="Home" />
      <main>
        <HeroSection />
        <SectionWrapper>
          <Heading align="center">BEST SELLER</Heading>
          <ColumnList>
            {recentProducts.map((p) => (
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
        <ImageTransitionSection beforeImg={BeforeImg} afterImg={AfterImg} />
        <FlexWrapper>
          <ContentWrapper position="left">
            <Heading>PROFIL PERUSAHAAN</Heading>
            <Paragraph align="justify">
             berdiri sejak 26 November 2016 yang berlokasi di kabupaten tangerang yang bergerak di bidang produksi busa general yang dapat di gunakan untuk beberapa industri di indonesia dan dalam pemaksimalan sisa produksi berupa busa scrap maka kami di tahun 2018 melai memproduksi busa rebonded yang sangan berfungsi untuk pembuatan kasur orthopedik, saat ini pabrik busa rebonded kami sangat berkembang pesat sehingga saat ini kami bisa menampung dan memanfaatkan sisa busa dari pabrik sepatu produksi merk nike, adidas dan beberapa merk lokal lainnya.
            </Paragraph>
            <StyledButton as={Link} to="/about">
              MORE
            </StyledButton>
          </ContentWrapper>
          <ImagesSection
            direction="right"
            firstImg={FirstImage}
            secondImg={SecondImage}
          />
        </FlexWrapper>
      </main>
    </Layout>
  );
};

export default IndexPage;
