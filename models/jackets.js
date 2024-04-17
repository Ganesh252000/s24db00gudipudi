const mongoose = require("mongoose")
const jacketsSchema = mongoose.Schema({
jacket_name: String,
jacket_brand: {
    type:String,
    minlength:1,
    maxlength:20,
},
cost: {
        type: Number,
        min:1,
        max:1000
    }
})
module.exports = mongoose.model("jackets",
jacketsSchema)