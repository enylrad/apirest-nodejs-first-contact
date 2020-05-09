'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(`${config.url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err, res) => {
    if (err) {
        return console.log(`Error connecting to data base: ${err}`)
    }
    console.log('Success connection')

    app.listen(config.port, () => {
        console.log(`API REST running in ${config.url}`)
    })
})