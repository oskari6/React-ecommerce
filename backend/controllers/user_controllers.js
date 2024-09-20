const User = require("../models/User");
const crypto = require("crypto");

//POST
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, isAdmin, isVerified } =
      req.body;
    const name = firstName + lastName;
    const order = new Product({
      name,
      email,
      password,
      isAdmin,
      isVerified,
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to create a new order", error });
  }
};

exports.requestPasswordReset = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.resetToken = crypto.randomBytes(32).toString("hex");

  user.resetTokenExpiration = Date.now() + 3600000;

  await user.save();

  res.json({ message: "Password reset token sent" });
};
