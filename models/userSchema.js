'use strict'

const mongoose = require('mongoose')

const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    displayName: String,
    avatar: String,
    password: {
        type: String,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    lastLogin: Date
})

userSchema.pre('save', (next) => {
    let user = this

    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next()

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})

userSchema.method.gravatar = function () {
    const dimen = '?s=200d=retro'

    if (!this.email) return `https://gravatar.com/avatar/${dimen}`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}${dimen}`
}

module.exports = mongoose.model('User', userSchema)