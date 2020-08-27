const mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true
    },
    flavorId: {
      type: String,
      required: true
    }
  },
  {
    collection: 'product'
  }
)

module.exports = mongoose.model('Product', ProductSchema)
