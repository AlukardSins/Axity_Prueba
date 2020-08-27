const express = require('express')

const BaseAPI = express()
const BaseModel = require('../models/base')

// Base CRUD
// Create
BaseAPI.post('/create', async (req, res) => {
  const Base = new BaseModel(req.body)

  try {
    await Base.save()
    res.send(Base)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Read
// All
BaseAPI.get('/all', async (req, res) => {
  const Bases = await BaseModel.find()

  try {
    res.send(Bases)
  } catch (err) {
    res.status(500).send(err)
  }
})

// By ID
BaseAPI.get('/one/:id', async (req, res) => {
  const Base = await BaseModel.findById(req.params.id)

  try {
    res.send(Base)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Update
BaseAPI.patch('/update/:id', async (req, res) => {
  try {
    const Base = await BaseModel.findByIdAndUpdate(req.params.id, req.body)

    Base.save()
    res.send(Base)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Delete
BaseAPI.delete('/delete/:id', async (req, res) => {
  try {
    const Base = await BaseModel.findByIdAndDelete(req.params.id)

    !Base ? res.status(404).send('Not found') : res.status(200).send(Base._id)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = BaseAPI
