'use strict'

const Product = require('../models/product')

function getProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `${err}` })
        if (!product) return res.status(404).send({ message: `Product not found` })

        return res.status(200).send({ product })
    })
}

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `${err}` })
        if (!products) return res.status(404).send({ message: `Products not found` })

        return res.status(200).send({ products })
    })
}

function addProduct(req, res) {
    let product = new Product()

    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) return res.status(500).send({ message: `${err}` })

        return res.status(200).send({ product: productStored })
    })
}

function updateProduct(req, res) {
    let productId = req.params.productId
    let update = req.body

    Product.findOneAndUpdate(productId, update, (err, product) => {
        if (err) return res.status(500).send({ message: `${err}` })

        return res.status(200).send({ product })
    })
}

function deleteProduct(req, res) {
    let productId = req.params.productId

    Product.findByIdAndRemove(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `${err}` })

        return res.status(201).send({ message: 'Product removed' })
    })
}

module.exports = {
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}