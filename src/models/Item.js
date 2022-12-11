const mongoose=require("mongoose");

const ItemSchema=mongoose.Schema({
    _id:{
        type:Number
        },
    name:{
        type:String,
    },
    cat:{
        type:Array,
    },
    total_price:{
        type:Number,
    },
    price:{
        type:Number,
    },
    img:{
        type:Array,
    },
    amount:{
        type:Array,
    },
    size:{
        type:Array,
    },
    materials:{
        type:Array,
    },
    colors:{
        type:Array,
    },
    amountColors:{
        type:Array,
    },
});


const Product=mongoose.model('Items',ItemSchema)
module.exports=Product;