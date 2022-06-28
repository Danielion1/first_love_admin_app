const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 8000
require("./MongoDBConnection/connection")
const submitDataRoute = require("./Routers/SubmitDataRoute")

const app = express()
app.use(express.json())
app.use(cors());
app.use(submitDataRoute)

app.listen(port, () =>{
    console.log(`${port} has connection`)
})