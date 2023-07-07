const path = require('path');

exports.addProduct = (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','addProduct.html'))
}