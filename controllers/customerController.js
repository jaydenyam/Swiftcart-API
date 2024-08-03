const Customer = require('../models/Customer');

// List all customers
exports.listCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (customer) {
            await customer.update(req.body);
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (customer) {
            await customer.destroy();
            res.json({ message: 'Customer deleted successfully' });
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};