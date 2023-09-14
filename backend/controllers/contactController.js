// const asyncHandler = require("express-async-handler");
import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";
//@desc Get all contacts
//@routes GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id }); //
  res.status(200).json(contacts);
});

//@desc Get contact by Id
//@routes GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(200).json(contact);
    } else {
      res.status(404);
      throw new Error("contact not found");
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//@desc Create New contacts
//@routes POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All feilds are required");
  }
  const contacts = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user._id,
  });
  res.status(201).json(contacts);
});

//@desc Update New contact
//@routes PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(201).json(updatedContact);
});

//@desc Delete contact
//@routes DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne();
  res.status(200).json(contact);
});

export { getContacts, getContact, createContact, updateContact, deleteContact };
