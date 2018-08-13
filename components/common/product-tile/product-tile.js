import React from "react";
import { Box } from "grid-styled";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  border: 1px solid rgba(3, 3, 3, 0.1);
  border-radius: 4px;
  // background-color: #000;
  padding: 10px;
  margin: 10px;
  height: 100%;
`;

const ProductTile = props => {
  return (
    <Box {...props} color="inherit">
      <Wrapper>
        <h3>
          <Link
            as={`/product/${props.category_id}`}
            href={`/product?id=${props.category_id}`}
          >
            <a>{props.name}</a>
          </Link>
        </h3>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </Wrapper>
    </Box>
  );
};

export default ProductTile;
