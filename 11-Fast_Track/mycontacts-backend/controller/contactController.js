const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

// @desc Get all contacts
// @route GET /api/contacts
// @access Private
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ userId: req.user.id });
    res.status(200).json(contacts);
});

// @desc create a contact
// @route POST /api/contacts/:id
// @access Private
const createNewContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const contact = await Contact.create({
        userId: req.user.id,
        name,
        email,
        phone
    });
    res.status(201).json(contact);
});

// @desc update a contact
// @route POST /api/contacts/:id
// @access Private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Check if user owns the contact
    if (contact.userId.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User not authorized to update this contact");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContact);
});

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access Private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Check if user owns the contact
    if (contact.userId.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User not authorized to delete this contact");
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: `Contact with id ${req.params.id} deleted successfully` });
});

//@route GET /api/contacts/:id
//@access Private
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Check if user owns the contact
    if (contact.userId.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User not authorized to view this contact");
    }

    res.status(200).json(contact);
});

module.exports = {
    getContact,
    createNewContact,
    deleteContact,
    getContactById,
    updateContact
}


