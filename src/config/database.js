const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    port: process.env.PORT, // Ensure this is the correct port for your database, typically 5432 for Postgres
    dialectOptions: {
        ssl: {
            require: true, // Ensure a secure connection
            rejectUnauthorized: false // Might be needed in development; consider more strict settings in production
        }
    }
});

module.exports = sequelize;