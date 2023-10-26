const express = require("express");
const ProductRouter = express.Router();
const Product = require("../models/Product.model");

ProductRouter.get("/", async (req, res) => {
    try {

        res.send('welcome')
    } catch (error) {
        res.send({ status: false, error: "Failed to fetch products." });
    }
});


module.exports = {
    ProductRouter
}