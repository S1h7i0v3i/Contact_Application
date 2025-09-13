const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler= require("./middleware/errorHandler");
const app = express();
const connectDB= require("./config/dbConnection");

connectDB();
const port = process.env.PORT || 5000;
// parser to parse the data recived from client
app.use(express.json()); 
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port ,() => {
    console.log(`Server running on port ${port}`);
});
