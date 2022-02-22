const mongoose= require('mongoose')
const  {nanoid}  =require ('nanoid')
//  const shortId = require('shortid')

// const mySchema = new Schema({
//     _id: {
//       type: String,
//       default: () => nanoid()
//     }
//   })

const urlSchema= mongoose.Schema({
    full:{
        type:String,
        required: true,
       

        //  default: shortId.generate
    },
         short:{
        type:String,
        required: true,
        default: ()=>nanoid(5)
    },  
    count:{
        type:Number,
        required:true,
        default:0
    }
})
const urlmodel=mongoose.model('urlmodel',urlSchema)
module.exports=urlmodel
