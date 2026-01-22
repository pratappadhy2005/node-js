const express = require('express');
const router = express.Router();
const { getContact, createNewContact, deleteContact, getContactById, updateContact } = require("../controller/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContact).post(createNewContact);
router.route("/:id").get(getContactById).delete(deleteContact).put(updateContact).post(createNewContact);

module.exports = router;