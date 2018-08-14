import Head from "next/head";
import { Component } from "react";
import { API } from "../config/paths";

import { Flex, Box } from "grid-styled";

class ProductPage extends Component {
  static async getInitialProps({ query }) {
    console.log(query);

    const results = await fetch(`${API.product}/${query.id}`);
    const product = await results.json();

    return {
      product
    };
  }

  render() {
    return (
      <Flex is="ul" flexWrap="wrap" alignItems="center">
        <Box color="inherit">
          <h1>{this.props.product.name}</h1>
          <h2>${this.props.product.price}</h2>
          <p>{this.props.product.description}</p>

          <div>
            {this.props.product.category
              ? this.props.product.category.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })
              : ""}
          </div>
        </Box>
      </Flex>
    );
  }
}

// const ProductPage = ({ product }) => {
//   console.log(product);

// };

export default ProductPage;
