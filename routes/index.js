'use strict'

const express = require('express')
const productCtrl = require('../controllers/products')
const userCtrl = require('../controllers/users')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/1/products', auth,productCtrl.getProducts)
api.get('/1/product/:productId', auth, productCtrl.getProduct)
api.post('/1/product', auth, productCtrl.addProduct)
api.put('/1/product/:productId', auth, productCtrl.updateProduct)
api.delete('/1/product/:productId', auth, productCtrl.deleteProduct)

api.post('/1/user/signUp', userCtrl.signUp)
api.post('/1/user/signIn', userCtrl.signIn)

api.get('/1/private', auth, (req, res) => {
    res.status(200).send({ message: "Success access" })
})

module.exports = api