const express = require('express');
const router = express.Router();

const productRoutes = require('./product');
const cartRoutes = require('./cart');
const customerRoutes = require('./customers');  // Import customer routes

router.use('/products', productRoutes);
router.use('/cart', cartRoutes);
router.use('/customers', customerRoutes);  // Use customer routes

module.exports = router;