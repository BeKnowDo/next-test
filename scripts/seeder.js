const faker = require("faker");
const fs = require("fs");
const commandLineArgs = require("command-line-args");
const mkdirp = require("mkdirp");

const pathConfig = require("../config/paths");
const log = console.log;

const optionDefinitions = [
  { name: "products", type: Number, defaultOption: 100 },
  { name: "quiet", type: String }
];
const options = commandLineArgs(optionDefinitions);

// Let's find out if our dummy directories exist in the first place
// If not...create them

const checkDirectories = async () => {
  await mkdirp(`${pathConfig.dataPaths.dummydata}`, function(err) {
    if (err) console.error(err);
    else {
      log("Dummy data directories good to go!");
      return creatProducts();
    }
  });
};

const creatProducts = () => {
  const productCount = options.products;
  let originalProducts = [];
  let originalCategories = [];
  let categoryTitles = [
    "Bath and Body",
    "Beauty and Grooming",
    "Health",
    "Tools and Accessories"
  ];

  categoryTitles.forEach(category => {
    log({ name: category });

    const randomID = faker.random.uuid();
    let subCategories = [];

    const categoryEntry = {
      categoryID: randomID,
      categoryTitle: category,
      href: `/categories/${randomID}`
    };

    // Create products for parent category
    let i;
    for (i = 0; i < productCount; i++) {
      const categoryID = randomID;
      const categoryTitle = category;
      const uniqueID = faker.random.uuid();
      const sku = uniqueID;
      const name = faker.commerce.productName();
      const image = "/images/product-example.png";
      const description = faker.hacker.phrase().substr(0, 60) + "...";
      const href = `/product/${uniqueID}`;
      const price = faker.commerce.price();

      const result = {
        categoryID,
        categoryTitle,
        sku,
        name,
        image,
        description,
        href,
        price
      };

      // log({ result });
      originalProducts.push(result);
      // log({ originalProducts });
    }

    originalCategories.push(categoryEntry);
  });

  const products = JSON.stringify(originalProducts);

  originalCategories.map(item => {
    const categoryID = item.categoryID;
    const featured = [];

    originalProducts.map(product => {
      if (product.categoryID === categoryID) {
        featured.push(product);
      }
    });
    item.featured = featured.splice(0, 3);
  });

  const categories = JSON.stringify(originalCategories);

  fs.writeFileSync(`${pathConfig.dataPaths.dummydata}/products.json`, products);

  fs.writeFileSync(
    `${pathConfig.dataPaths.dummydata}/categories.json`,
    categories
  );
};

checkDirectories();
