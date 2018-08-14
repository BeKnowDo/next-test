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
  await mkdirp(`${pathConfig.dataPaths.webhose.seedTarget}`, function(err) {
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
      const source = {
        site: product.source.site,
        section: product.source.site_section
      };
      const category = product.categories;
      const id = product.uuid;
      const name = product.name;
      const description = product.description;
      const price = product.price;
      const brand = product.brand;
      const image = product.images;
      const colors = products.colors;

      const history = {
        updated: product.last_changed,
        crawled: product.crawled
      };

      const result = {
        source,
        category,
        id,
        name,
        description,
        price,
        brand,
        image,
        colors,
        history
      };

      log(result);

      products.push(result);
    });

    const finalProducts = JSON.stringify(products);

    fs.writeFileSync(
      `${pathConfig.dataPaths.webhose.seedTarget}/products.json`,
      finalProducts
    );
  });
};

checkDirectories();
