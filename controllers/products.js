
const Product = require('../models/product');



exports.showProduct = (req,res)=>{
    Product.fetchAll((product)=>{
        res.render('cart',{prods: product})
    })
    
}

exports.addProduct = (req,res)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/cart');
}