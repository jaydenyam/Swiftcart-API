const express = require('express');
require('dotenv').config();
const sequelize = require('./config/database');
const routes = require('./routes');

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Middleware
app.use(express.json());

// Use routes
app.use('/', routes);

// Basic route for health check
app.get('/', (req, res) => {
    res.send('Hello, Swiftcart-API is running!');
});

// Test database connection and start the server
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync().then(() =>{
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = app;