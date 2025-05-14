const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please add the contact name"] },
    email: { type: String, required: [true, "Please add the contact email"], unique: true },
    phone: { type: String, required: [true, "Please add the contact phone"], unique: true },
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;