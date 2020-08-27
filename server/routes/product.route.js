const express = require('express')

const ProductAPI = express()
const ProductModel = require('../models/product')

// Product CRUD
// Create
ProductAPI.post('/create', async (req, res) => {
  const Product = new ProductModel(req.body)

  try {
    await Product.save()
    res.send(Product)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Read
// All
ProductAPI.get('/all', async (req, res) => {
  const Products = await ProductModel.find()

  try {
    res.send(Products)
  } catch (err) {
    res.status(500).send(err)
  }
})

// By ID
ProductAPI.get('/one/:id', async (req, res) => {
  const Product = await ProductModel.findById(req.params.id)

  try {
    res.send(Product)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Update
ProductAPI.patch('/update/:id', async (req, res) => {
  try {
    const Product = await ProductModel.findByIdAndUpdate(req.params.id, req.body)

    Product.save()
    res.send(Product)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Delete
ProductAPI.delete('/delete/:id', async (req, res) => {
  try {
    const Product = await ProductModel.findByIdAndDelete(req.params.id)

    !Product ? res.status(404).send('Not found') : res.status(200).send(Product._id)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = ProductAPI
