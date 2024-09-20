const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: String, default: false},
    resetToken: { type: String},
    resetTokenExpiration: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

//pw hash
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next(); //skip if password hasnt changed
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
