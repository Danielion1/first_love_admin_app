const mongoose = require("mongoose")
let uri = 'mongodb+srv://danuser:MyFirstLove12@cluster0.fk1kt.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri)
.then(()=>{
    console.log("connection is successful")
}).catch((err)=>{
    console.log("connection failed")
    console.log(err)
})