const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const mongoose = require("mongoose");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
})

//@desc Create New Contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    try {
        console.log("Full user object:", req.user);
        console.log("User ID type:", typeof req.user.id);

        const contact = await Contact.create({
            user_id: req.user.id,
            name,
            email,
            phone,
        });
        console.log("Contact created:", contact);
        res.status(201).json(contact);
    } catch (error) {
        console.error("Error creating contact:", error.message);
        res.status(400);
        throw new Error(error.message);
    }
    res.status(201).json(contact);
})

//@desc Get Contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
})

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({ message: `Update Contact for ${req.params.id}` });
}

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
})

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
