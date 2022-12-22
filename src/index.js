const express  = require('express');
const Series = require('./routes/SeriesRoue');
const app = express();
const User = require('./routes/UserRoute')
require("../src/db/conn")
const Movies = require('./routes/movieroute')
const port = process.env.PORT || 80;
app.use(express.json())
app.use(Series)
app.use(Movies)
app.use(User)
app.listen(port,()=>{
    console.log(`i am running ${port}`)
})