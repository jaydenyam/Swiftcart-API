Swiftcart API

The Swiftcart API is a backend service for managing a shopping cart system, built using Node.js, Express, and PostgreSQL.

Features

	•	Manage customers, products, carts, and orders.
	•	RESTful API design for easy integration.
	•	Sequelize ORM for database interaction.

Prerequisites

	•	Node.js (version 12 or later)
	•	npm (comes with Node.js)
	•	PostgreSQL

Getting Started

Clone the Repository:

git clone https://github.com/jaydenyam/Swiftcart-API.git
cd Swiftcart-API

Install Dependencies:

npm install

Configure Environment Variables

Create a .env file in the root directory with the following content:

PGHOST=your_database_host
PGDATABASE=swiftcart_db
PGUSER=your_database_user
PGPASSWORD=your_database_password
APP_PORT=3000

Replace your_database_host, your_database_user, and your_database_password with your PostgreSQL database credentials.

Initialize the Database:

Ensure your database is running and accessible. You can use the following commands to create and migrate the necessary database structure:

npx sequelize-cli db:create
npx sequelize-cli db:migrate

Start the Server:

npm start

The server will run at http://localhost:3000.

API Endpoints

Products

	•	POST /products: Create a new product.
	•	GET /products: Retrieve all products.

Cart

	•	POST /cart: Add an item to the cart.
	•	GET /cart/:customerId: Retrieve the cart for a specific customer.

Customers

	•	GET /customers: Retrieve all customers.
	•	GET /customers/:id: Retrieve a customer by ID.

Running Tests

Use the .rest file with the VS Code REST Client extension to test API endpoints.

Example Test for Adding a Product

# POST /products
POST http://localhost:3000/products
Content-Type: application/json

{
    "name": "Sample Product",
    "price": 29.99,
    "stock": 100
}

Design Choices

	•	Node.js and Express: Selected for lightweight and efficient server-side operations.
	•	Sequelize ORM: Chosen for managing database interactions in a scalable way.
	•	RESTful API: Allows easy resource manipulation using standard HTTP methods.

Challenges

	•	Database Connection: Addressed SSL configuration issues by setting appropriate options in Sequelize.
	•	JSON Errors: Resolved formatting issues by validating JSON requests.
	•	Complex Relationships: Implemented many-to-many relationships using junction tables for cart and order items.

Future Improvements

	•	Implement user authentication and authorization.
	•	Add comprehensive error handling and logging.

License

This project is licensed under the ISC License.