const mongoose  = require('mongoose')
const validator = require('validator')

const impartationDataSchema =  new mongoose.Schema({

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
 
})

const impartationDataModel = new mongoose.model('impartationDataModel', impartationDataSchema);
module.exports = impartationDataModel;