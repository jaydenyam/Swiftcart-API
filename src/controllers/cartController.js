const ShoppingCart = require('../models/ShoppingCart');

exports.addItemToCart = async (req, res) => {
    const { customerId, productId, quantity } = req.body;
    try {
        const cartItem = await ShoppingCart.create({ customerId, productId, quantity });
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listCartItems = async (req, res) => {
    const { customerId } = req.params;
    try {
        const cartItems = await ShoppingCart.findAll({ where: { customerId } });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.removeItemFromCart = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await ShoppingCart.destroy({ where: { id } });
        res.json({ success: !!result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};