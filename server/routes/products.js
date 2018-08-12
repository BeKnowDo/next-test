const fs = require("fs-extra");
const express = require("express");
const faker = require("faker");
const clear = require("clear-console");
const pathConfig = require("../../config/paths");

const log = console.log;

// Initialize our express router
const router = express.Router();

// Get Cart
router.get("/products", (req, res, next) => {
  // clear();
  const productPath = fs.existsSync(pathConfig.dataPaths.products);

  if (productPath) {
    const contents = JSON.parse(
      fs.readFileSync(pathConfig.dataPaths.products, {
        encoding: "utf-8",
        flag: "rs+"
      })
    );

    res.json(contents);
  } else {
    res.json("nothing");
  }
});

module.exports = router;
