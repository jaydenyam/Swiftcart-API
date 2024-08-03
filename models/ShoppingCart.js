const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./Customer');
const Product = require('./Product');

const ShoppingCart = sequelize.define('ShoppingCart', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Customer.hasMany(ShoppingCart);
ShoppingCart.belongsTo(Customer);
Product.hasMany(ShoppingCart);
ShoppingCart.belongsTo(Product);

module.exports = ShoppingCart;