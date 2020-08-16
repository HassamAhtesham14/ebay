var mongoose =require("mongoose");
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;
var productSchema = new mongoose.Schema({
    product_name: String,
    description: String,
    product_image: String,
    user_name:String,
    amount:String,
    status:String
});
var proModel = mongoose.model('Products', productSchema);
module.exports=proModel;