const express = require('express')

const router = express.Router();

const addProductController = require('../controllers/addProduct')

const productsController = require('../controllers/products')

// middleware for adding product
router.use('/addProduct',addProductController.addProduct);

// middleware for handling the input
router.post('/cart',productsController.addProduct)

exports.routes = router;

