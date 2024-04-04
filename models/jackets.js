const mongoose = require("mongoose")
const jacketsSchema = mongoose.Schema({
    jacket_name: String,
    jacket_brand: String,
    cost: Number
})
module.exports = mongoose.model("jackets",
jacketsSchema)