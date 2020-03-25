const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
db.once('open', () => console.log('connected to the databese'));
module.exports = db