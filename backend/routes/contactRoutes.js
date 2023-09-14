// const express = require("express");
import express from "express";
import {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

// router.use(protect);
router.route("/").get(getContacts).post(protect, createContact);
router
  .route("/:id")
  .get(getContact)
  .put(protect, updateContact)
  .delete(protect,deleteContact);
// router.route("/").delete((req, res) => {
//   res.status(200).json({ message: `Delete contact for ${req.params.id}` });
// });

export default router;
