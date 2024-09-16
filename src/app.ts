import express, { Request, Response } from "express";
import mongoose from "mongoose"; //mongodb
import Customer from "./models/customer";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
/**/
dotenvConfig(); // Load .env variables
const app = express();

app.use(express.json()); //parses post data from the req.body
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION || "";

const customer = new Customer({
  name: "Name3",
  industry: "Industry3",
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome!!");
});

//GET
app.get("/api/customers", async (req: Request, res: Response) => {
  console.log(await mongoose.connection.db.listCollections().toArray()); //shows in the terminal with all entries
  try {
    const result = await Customer.find();
    res.json({ customers: result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

//GET
app.get("/api/customers/:id", async (req: Request, res: Response) => {
  console.log({ requestParams: req.params, requestQuery: req.query });
  try {
    const { id: customerId } = req.params;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({ customer });
    }
  } catch (e) {
    res.status(500).json({ error: "something went wrong" });
  }
});

//PUT
app.put("/api/customers/:id", async (req: Request, res: Response) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findOneAndReplace(
      { _id: customerId },
      req.body,
      { new: true }
    );
    res.json({ customer });
  } catch (e) {
    res.status(500).json({ error: "something went wrong" });
  }
});

//PATCH
app.patch("/api/customers/:id", async (req: Request, res: Response) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findOneAndUpdate(
      { _id: customerId },
      req.body,
      { new: true }
    );
    res.json({ customer });
  } catch (e) {
    res.status(500).json({ error: "something went wrong" });
  }
});

//PATCH
app.patch("/api/orders/:id", async (req: Request, res: Response) => {
  console.log(req.params);
  const orderId = req.params.id;
  req.body._id = orderId;
  try {
    const result = await Customer.findOneAndUpdate(
      { "orders._id": orderId }, //"orders._id" when nested
      { $set: { "orders.$": req.body } },
      { new: true }
    );

    if (result) {
      console.log(result);
      res.json(result);
    } else {
      res.status(404).json({ error: "something went wrong" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "something went wrong" });
  }
});

//GET
app.get("/api/orders/:id", async (req: Request, res: Response) => {
  try {
    const result = await Customer.findOne({ "orders._id": req.params.id });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "something went wrong" });
  }
});

//DELETE
app.delete("/api/customers/:id", async (req: Request, res: Response) => {
  try {
    const customerId = req.params.id;
    const result = await Customer.deleteOne({ _id: customerId });
    res.json({ deletedCount: result.deletedCount });
  } catch (e) {
    res.status(500).json({ error: "something went wrong" });
  }
});

//END POINTS
app.post("/", (req, res) => {
  res.send("This is a post request");
});

app.post("/api/customers", async (req: Request, res: Response) => {
  console.log(req.body); //body from post man request
  const customer = new Customer(req.body);
  try {
    await customer.save(); //saves to db
    res.status(201).json({ customer });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

//MongoDb conn
const start = async () => {
  try {
    await mongoose.connect(CONNECTION);
    app.listen(PORT, () => {
      console.log("App listening on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
