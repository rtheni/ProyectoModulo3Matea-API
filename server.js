const express = require("express");
const controller = require("./controller");

const app = express();
const port = 3000;

app.use(express.json());