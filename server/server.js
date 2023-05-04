const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const connectDB = require('./config/db');

const postRoutes = require("./routes/post");

dotenv.config( { path: "./config/config.env"});

connectDB();

const app = express();

app.use(bodyParser.json());
app.use("/", postRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `Server running on port ${PORT}`);