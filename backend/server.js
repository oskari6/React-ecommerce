const dotenv = require("dotenv");
const { connectToDB } = require("../config/mongodb_config");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

dotenv.config();

//Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

//Middleware handling
app.arguments((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("server error");
});

//DB connection
app.get("/", async (reg, res) => {
  try {
    const db = await connectToDB();
    const collection = db.collection("products");
    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    res.status(500).send("Error connecting to db");
  }
});

app.listen(port, () => {
  console.log("running..");
});
