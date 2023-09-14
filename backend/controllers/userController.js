import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// import bcrypt from "bcrypt";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

//@desc Register a user
//@routes post /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new err("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new err("User already registered!");
  }
  //Hash Password

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hash Password:", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new err("User data is not valid");
  }
  res.json({ message: "Register the user" });
});

//@desc login a user
//@routes post /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {  
    res.status(400);
    throw new err("All fields are Mandatory!");
  }
  const user = await User.findOne({ email });
  // compared with Hashedpassword

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign( 
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or pasword is not valid");
  }
});

//@desc Current user info
//@routes get/api/users/current
//@ private
const currentUser = asyncHandler(async (req, res) => {
   const users = await User.find({});
  res.json(users);
});
export { registerUser, loginUser, currentUser };
