// load in environment variables
require("dotenv").load();
const env = process.env;
const isProduction = process.env.NODE_ENV === "production";
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const nocache = require("nocache");
const path = require("path");
const chalk = require("chalk");

const log = console.log;
const logNotify = chalk.bgKeyword("white").keyword("red");

const products = require("./routes/products");

const app = express();
app.use(cors());
app.use(nocache());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", products);

app.get("/", (req, res) => {
  res.send(`This is our API's entry point`);
});
// Let's listen on the imported PORT env variable
app.listen(env.PORT, () => {
  log(`Server's started on port ${env.PORT}`);
});

// Open a browser instance for convenience
// opn(`${env.LOCAL_HOST}:${env.PROXY_PORT}`, { app: "google chrome" });

log(logNotify(`Let's get this party started...`));
