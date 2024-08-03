const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Route to list all customers
router.get('/', customerController.listCustomers);

// Route to get a single customer by ID
router.get('/:id', customerController.getCustomerById);

// Route to create a new customer
router.post('/', customerController.createCustomer);

// Route to update a customer by ID
router.put('/:id', customerController.updateCustomer);

// Route to delete a customer by ID
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;