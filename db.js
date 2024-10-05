const {Schema,mongoose} = require('mongoose');
const ObjectId = mongoose.ObjectId;
console.log('Database Connected')
mongoose.connect(process.env.MONGO_URL)

const userSchema = new Schema({
    email : {type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
});



const prodcutSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
});



const userModel = mongoose.model("user",userSchema);
const productModel = mongoose.model("products",prodcutSchema);


module.exports={
    userModel:userModel,
    productModel:productModel,
    
}