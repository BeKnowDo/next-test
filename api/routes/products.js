const fs = require("fs-extra");
const express = require("express");
const pathConfig = require("../../config/paths");

const clear = require("clear-console");
const log = console.log;

// Initialize our express router
const router = express.Router();

// Get products
router.get("/products", (req, res, next) => {
  const productPath = fs.existsSync(pathConfig.dataPaths.webhose.products);

  if (productPath) {
    const contents = JSON.parse(
      fs.readFileSync(pathConfig.dataPaths.webhose.products, {
        encoding: "utf-8",
        flag: "rs+"
      })
    );

    res.json(contents);
  } else {
    res.json({ notification: `Couldn't find requested products` });
  }
});

// Get products
router.get("/product/:id", (req, res, next) => {
  const productPath = fs.existsSync(pathConfig.dataPaths.webhose.products);

  if (productPath) {
    const contents = JSON.parse(
      fs.readFileSync(pathConfig.dataPaths.webhose.products, {
        encoding: "utf-8",
        flag: "rs+"
      })
    );

    clear();
    console.log(req.params);

    const result = contents.find(item => {
      if (item.id === req.params.id) {
        // log(item.id);
        // log(req.params.id);
        return item;
      }
    });

    if (result) {
      res.json(result);
    } else {
      res.json({ notification: `Couldn't find requested products` });
    }
  } else {
    res.json({ notification: `Couldn't find requested products` });
  }
});

module.exports = router;
