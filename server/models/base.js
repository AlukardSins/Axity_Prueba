const mongoose = require('mongoose')

var BaseSchema = new mongoose.Schema(
  {
    baseName: {
      type: String,
      required: true
    },
    isMilk: {
      type: Boolean,
      required: true
    },
    isLactose: {
      type: Boolean,
      required: true
    },
    isLight: {
      type: Boolean,
      required: true
    }
  },
  {
    collection: 'base'
  }
)

module.exports = mongoose.model('Base', BaseSchema)
