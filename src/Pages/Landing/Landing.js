import React from 'react'
import Layout from '../../Components/Layout/Layout';
import CarouselEffect from '../../Components/Carousel effect/Carousel'
import Catagory from '../../Components/Catagory/Catagory';
import Product from '../../Components/Product/Product';

const Landing = () => {
  return (
     <Layout>
      <CarouselEffect/>
      <Catagory />
      <Product />
    </Layout>
  );
}

export default Landing