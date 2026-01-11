// @desc Get all contacts
// @route GET /api/contacts
// @access Public
const getContact = (req, res) => {
    res.status(200).json({ status: "success", message: "Get all contacts" });
}

// @desc create a contact
// @route POST /api/contacts/:id
// @access Public
const createNewContact = (req, res) => {
    res.status(201).json({ status: "success", message: `Create a contact with id ${req.params.id}` });
}

// @desc update a contact
// @route POST /api/contacts/:id
// @access Public
const updateContact = (req, res) => {
    res.status(200).json({ status: "success", message: `Update a contact with id ${req.params.id}` });
}

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = (req, res) => {
    res.status(200).json({ status: "success", message: `Delete a contact with id ${req.params.id}` });
}

//@route GET /api/contacts/:id
//@access Public
const getContactById = (req, res) => {
    res.status(200).json({ status: "success", message: `Get a contact with id ${req.params.id}` });
}


module.exports = {
    getContact,
    createNewContact,
    deleteContact,
    getContactById,
    updateContact
}


