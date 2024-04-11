const { createConnection } = require('mysql2/promise');
require('dotenv').config();

const connection = async () => {
    try {
        const conn = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD
        });
        console.log("Connected to database");
        return conn;
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = connection;
