const webhoseio = require("webhoseio");
const faker = require("faker");
const fs = require("fs");
const mkdirp = require("mkdirp");

// const commandLineArgs = require("command-line-args");
const pathConfig = require("../config/paths");
const log = console.log;

// Let's find out if our dummy directories exist in the first place
// If not...create them

const checkDirectories = async () => {
  await mkdirp(`${pathConfig.dataPaths.webhose}`, function(err) {
    if (err) console.error(err);
    else {
      log("Dummy data directories good to go!");
      return creatProducts();
    }
  });
};

const creatProducts = () => {
  const products = [];
  const client = webhoseio.config({
    token: "fd5796e1-67f6-4016-ab8f-c51578bd2725"
  });
  const query_params = {
    q:
      "category:health-beauty category:moisturizers category:skin-care category:fashion",
    ts: "1526394829329"
  };

  client.query("productFilter", query_params).then(output => {
    output["products"].map(product => {
      log(product.name);
    });
  });

  const finalProducts = JSON.stringify(products);

  fs.writeFileSync(`${pathConfig.dataPaths.webhose}/products.json`, products);
};

checkDirectories();
