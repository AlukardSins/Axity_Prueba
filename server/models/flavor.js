const mongoose = require('mongoose')

var FlavorSchema = new mongoose.Schema(
  {
    flavorName: {
      type: String,
      required: true
    },
    baseId: {
      type: String,
      required: true
    }
  },
  {
    collection: 'flavor'
  }
)

module.exports = mongoose.model('Flavor', FlavorSchema)
