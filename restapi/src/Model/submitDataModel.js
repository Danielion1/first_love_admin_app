const mongoose  = require('mongoose')
const validator = require('validator')

const submitDataSchema =  new mongoose.Schema({

  gatheringService:{
    type:String,
    require:true
  },

  typeOfService:{
    type:String,
    require:true
  },

  region:{
    type:String,
    require:true
  },


  inpersonAttendance:{
    type:Number
  },

  zoomAttendance:{
    type:Number
  },

  firstTimers:{
    type:Number
  },

  tithers:{
    type:Number
  },

  newConvert:{
    type:String
  },
  
  date:{
    type:Date,
    require:true
  },
  action:{
    type:String,
  },
 
})

const submitDataModel = new mongoose.model('submitDataModel', submitDataSchema);
module.exports = submitDataModel;