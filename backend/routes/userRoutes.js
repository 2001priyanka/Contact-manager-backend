// import express from express;
import express from "express";
import {
  registerUser,
  loginUser,
  currentUser,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
// import validateToken from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", protect, currentUser);
// console.log(protect);

export default router;
