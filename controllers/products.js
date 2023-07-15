
const Product = require('../models/product');

const Wishlist = require('../models/wishlist');

const path = require('path');

// renders all products
exports.showProduct = (req,res)=>{
    Product.fetchAll((product)=>{
        res.render('cart',{prods: product,id: product.id })
    })
    
}

// adds product to cart
exports.addProduct = (req,res)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/cart');
}

// shows unique product details
exports.showProductDetails = (req,res)=>{
    const productId=req.params.productId;

    Product.showProductById(productId, product=>{
        console.log(product)
        res.render('productDetails',{prod: product,id:productId})
    })
    
}

// adds products to wishlist
exports.addToWishlist = (req,res)=>{
    const prodId = req.body.productId;

    Product.showProductById(prodId, product=>{
        Wishlist.addProduct(prodId,19.9)
    })
    
   
        
    
    console.log(prodId)
    res.render('wishlist')
}