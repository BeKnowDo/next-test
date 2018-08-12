import fetch from "isomorphic-fetch";
import { API } from "../config/paths";
import ProductTile from "../components/common/product-tile";
import { Flex } from "grid-styled";

const Home = ({ products }) => {
  return (
    <div>
      <h1>Hi...asshole</h1>
      {products.length > 0 ? buildList(products) : undefined}
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const results = await fetch(API.products);
  const products = await results.json();

  return {
    products
  };
};

const buildList = products => {
  return (
    <Flex is="ul" flexWrap="wrap" alignItems="center">
      {products.map((product, index) => {
        // console.log(product);

        return (
          <ProductTile
            width={[1, 1 / 2, 1 / 4]}
            m={"auto"}
            is="li"
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            category_id={product.categoryID}
          />
        );
      })}
    </Flex>
  );
};

export default Home;
