const mongoose = require("mongoose");

const hackSchema = new mongoose.Schema({
    username: String,
    password: String,
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("Hack", hackSchema);
