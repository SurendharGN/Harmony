const fs = require('fs');

const path = require('path');

const Wishlist = require('./wishlist')

const filePath = path.join(path.dirname(require.main.filename),'data','products.json');

const getProductsFromFile=cb=>{
    fs.readFile(filePath,(err,data)=>{
            if(err){
                cb([])
            }
            cb(JSON.parse(data))

        })
}
module.exports = class  Product {
    constructor(title){
        this.title=title;
        

    }

    save() {
        this.id=Math.floor(Math.random()*10).toString();
        
        fs.readFile(filePath, (err,data)=>{
            let products = []
            if(!err){
                products=JSON.parse(data)
            };
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })

    }

    static fetchAll(cb) {
        getProductsFromFile(cb)

    }

    static showProductById(id, cb){
        getProductsFromFile(products=>{
            const product = products.find(p=>p.id === id)
            cb(product)
        })
    }

    static delete(productId){
        getProductsFromFile(products=>{
            const updatedProducts= products.filter(prod => prod.id !== productId);

            fs.writeFile(filePath, JSON.stringify(updatedProducts),(err)=>{
                if (!err){
                    Wishlist.deleteProduct(productId,19.9)

                }
            })


        })

    }

} 