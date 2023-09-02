const path = require('path');

exports.getIndex = (req,res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))

}