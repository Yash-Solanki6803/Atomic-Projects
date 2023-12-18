const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  
//   email: {
//     type: String,
//     required: [true, "Please enter a email"],
//     unique: [true, "User already exists"],
//     lowercase: true,
//     validate: [validator.isEmail, "Please enter a valid email address"],
//   }, 
  username: {
    type: String,
    required: [true, "Please enter a unsername"],
    unique: [true, "User already exists"],
    lowercase: true,
    // validate: [validator.isEmail, "Please enter a valid email address"],
  },
  // photo: String,
  password: {
    type: String,
    required: [true, "Please enter a password"],
    // minLength: 8,
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "sub-admin", "admin"],
    default: "user",
  },

});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});



// instance method
userSchema.methods.passwordCheck = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};


module.exports = mongoose.model("User", userSchema);
