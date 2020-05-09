'use strict'

const express = require('express')
const productCtrl = require('../controllers/products')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/1/products', productCtrl.getProducts)
api.get('/1/product/:productId', productCtrl.getProduct)
api.post('/1/product', productCtrl.addProduct)
api.put('/1/product/:productId', productCtrl.updateProduct)
api.delete('/1/product/:productId', productCtrl.deleteProduct)

api.get('/1/private', auth, function (req, res) {
    res.status(200).send({ message: "Success access" })
})

module.exports = api