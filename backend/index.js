const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
//Authentication
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");

app.use(express.json());
app.use(cors());
//Endpoint for register
app.use("/api/register", register);
app.use("/api/login", login);

//Authentication
require("dotenv").config();

app.get("/", (req, res) => {
	res.send("Welcome to our Bookstore!");
});

//Authentication - Connect to MongoDB
const uri = process.env.DB_URI;
app.listen(port, console.log(`Server running on port ${port}`));

//Authentication - Connect to MongoDB
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connected to MongoDB successfully");
	});
