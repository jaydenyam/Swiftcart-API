const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/', cartController.addItemToCart);
router.get('/:customerId', cartController.listCartItems);
router.delete('/:id', cartController.removeItemFromCart);

module.exports = router;