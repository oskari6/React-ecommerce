const express = require("express");
const adminAuth = require("../middlewares/adminAuth");

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

//pubic
router.get("/", getAllProducts); //GET /api/products
router.get("/:id", getProductById); //GET /api/products/:id

//admin
router.post("/", adminAuth, createProduct);
router.put("/:id", adminAuth, updateProduct);
router.delete("/:id", adminAuth, deleteProduct);

module.exports = router;
