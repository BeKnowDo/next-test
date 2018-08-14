const API_DETAILS = {
  SERVER: "http://localhost",
  PORT: "3001"
};

const dummyDirectory = "dummy-data";
const webhose = "webhose";

module.exports = {
  API: {
    products: `${API_DETAILS.SERVER}:${API_DETAILS.PORT}/api/products`,
    product: `${API_DETAILS.SERVER}:${API_DETAILS.PORT}/api/product`
  },

  dataPaths: {
    dummydata: `${dummyDirectory}`,
    webhose: {
      seedTarget: `${webhose}`,
      products: `${webhose}/products.json`
    },
    products: `${dummyDirectory}/products.json`
  }
};
