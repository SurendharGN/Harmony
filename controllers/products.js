
const Product = require('../models/product');

const path = require('path');

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

exports.showProductDetails = (req,res)=>{
    const productId=req.params.productId
    Product.showProductById(productId, product=>{
        console.log(product)
        res.render('productDetails',{prod: product})
    })
    
}