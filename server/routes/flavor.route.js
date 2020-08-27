const express = require('express')

const FlavorAPI = express()
const FlavorModel = require('../models/flavor')

// Flavor CRUD
// Create
FlavorAPI.post('/create', async (req, res) => {
  const Flavor = new FlavorModel(req.body)

  try {
    await Flavor.save()
    res.send(Flavor)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Read
// All
FlavorAPI.get('/all', async (req, res) => {
  const Flavors = await FlavorModel.find()

  try {
    res.send(Flavors)
  } catch (err) {
    res.status(500).send(err)
  }
})

// By ID
FlavorAPI.get('/one/:id', async (req, res) => {
  const Flavor = await FlavorModel.findById(req.params.id)

  try {
    res.send(Flavor)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Update
FlavorAPI.patch('/update/:id', async (req, res) => {
  try {
    const Flavor = await FlavorModel.findByIdAndUpdate(req.params.id, req.body)

    Flavor.save()
    res.send(Flavor)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Delete
FlavorAPI.delete('/delete/:id', async (req, res) => {
  try {
    const Flavor = await FlavorModel.findByIdAndDelete(req.params.id)

    !Flavor ? res.status(404).send('Not found') : res.status(200).send(Flavor._id)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = FlavorAPI
