import Head from "next/head";
import { API } from "../config/paths";

import { Flex } from "grid-styled";

const ProductPage = ({ props }) => {
  // console.log(props);
  return (
    <Flex is="ul" flexWrap="wrap" alignItems="center">
      {props}
    </Flex>
  );
};

ProductPage.getInitialProps = async () => {
  const results = await fetch(API.products);
  // const products = await results.json();

  // return {
  //   products
  // };
};

export default ProductPage;
