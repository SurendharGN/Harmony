const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');


const adminData=require('./routes/admin');
const shopRoutes= require('./routes/shop');

const app = express();

app.set('view engine','pug');
app.set('views','views')

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(('/public',path.join(__dirname,""))));

app.use(adminData.routes);

app.use(shopRoutes);





app.listen(3000)