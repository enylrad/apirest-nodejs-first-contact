'use strict'

const User = require('../models/user')
const service = require('../services')

function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    user.save((err) => {
        if (err) return res.status(500).send({ message: `${err}` })

        return res.status(201).send({ token: service.createToken(user) })
    })
}

function signIn(req, res) {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: `${err}`})
        if (!user) return res.status(404).send({ message: 'User not found' })

        req.user = user
        res.status(200).send({
            message: 'SignIn Success',
            token: service.createToken(user)
        })
    })
}

module.exports = {
    signUp,
    signIn
}