const express = require("express");
const adminAuth = require("../middlewares/adminAuth");

const {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrderPaid,
  updateOrderDelivered,
} = require("../controllers/productController");
const router = express.Router();

//public
router.post("/", createOrder); //POST /api/orders
router.get("/:id", getOrderById); //GET /api/orders/:id

//admin
router.post("/", adminAuth, getAllOrders);
router.put("/:id", adminAuth, updateOrderPaid);
router.put("/:id", adminAuth, updateOrderDelivered);

module.exports = router;
