const fs = require('fs');

const path = require('path');

const filePath = path.join(path.dirname(require.main.filename),'data','wishlist.json');

module.exports = class Wishlist {
    static addProduct(id,price){
        
        // 1. Fetch the previous cart
        fs.readFile(filePath,(err,data)=>{
            let wishlist={products:[],totalPrice:0}
            if(!err){
                console.log(JSON.parse(data))
                wishlist = JSON.parse(data)
            }

            // 2. check for any existing product of the same id
            const existingProductIndex=wishlist.products.findIndex(product=>product.id===id)

            const existingProduct = wishlist.products[existingProductIndex];

        // 3. increase quantity/ add new product
            let updatedProduct;

            if(existingProduct){
            updatedProduct={...existingProduct};
            updatedProduct.qty += 1;
            // wishlist.products=[...wishlist.products];
            wishlist.products[existingProductIndex]=updatedProduct;

            }else{
                updatedProduct={id: id,qty:1};
                wishlist.products = [...wishlist.products, updatedProduct]

        }

            wishlist.totalPrice += price;

            fs.writeFile(filePath, JSON.stringify(wishlist),(err)=>{
            console.log(err)
            })
        })
    }
        
        
}


