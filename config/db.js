
const mongoose = require('mongoose')

async function dbConnector(fastify, options) {
    try {
        const url = "mongodb://localhost:27017/fastify-blog"
        const db = await mongoose.connect(url, {
                useNewUrlParser: true
            })
        console.log("Database is connected")
        fastify.decorate('mongo', db)
    } catch (err) {
        console.log(err)
    }

}
module.exports = dbConnector
