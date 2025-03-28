const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

// Define frontend URL from environment variables with default
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express();

// Configure CORS to only accept requests from the frontend
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use('', routes);

module.exports = app;