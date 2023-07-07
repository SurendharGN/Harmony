const fs = require('fs');

const path = require('path');

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
        this.id=Math.random().toString();
        
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

} 