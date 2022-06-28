const mongoose  = require('mongoose')
const validator = require('validator')

const flowUnityDataSchema =  new mongoose.Schema({

  gatheringService:{
    type:String,
    require:true
  },

  typeOfService:{
    type:String,
    require:true
  },

  zoomAttendance:{
    type:Number
  },
  
  date:{
    type:Date,
    require:true
  },
 
})

const flowUnityDataModel = new mongoose.model('flowUnityDataModel', flowUnityDataSchema);
module.exports = flowUnityDataModel;