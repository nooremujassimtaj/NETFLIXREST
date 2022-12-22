const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://REST:API@restapi.ihumwkm.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

mongoose.connection.on('connected', () => {
    console.log('connected to DB ! ')
})
mongoose.connection.on('could not connect to DB', (e) => {
    console.log(`error occured ${e}`)
})