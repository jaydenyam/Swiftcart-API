const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
const PORT = process.env.APP_PORT || 3000; // Using APP_PORT for the Express server

// Set up Sequelize connection
const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    port: process.env.PORT // 5432 for the database connection
});

// Test database connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, Swiftcart-API is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = sequelize;