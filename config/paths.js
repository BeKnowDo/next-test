const API_DETAILS = {
  SERVER: "http://localhost",
  PORT: "3001"
};

const dummyDirectory = "dummy-data";

module.exports = {
  API: {
    products: `${API_DETAILS.SERVER}:${API_DETAILS.PORT}/api/products`
  },
  dataPaths: {
    dummydata: `${dummyDirectory}`,
    products: `${dummyDirectory}/products.json`
  }
};
