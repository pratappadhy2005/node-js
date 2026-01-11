const express = require('express');
const router = express.Router();
const { getContact, createNewContact, deleteContact, getContactById, updateContact } = require("../controller/contactController");

router.route("/").get(
    getContact
);

router.route("/").post(
    createNewContact
);

router.route("/:id").put(
    updateContact
);

router.route("/:id").delete(
    deleteContact
);

router.route("/:id").get(
    getContactById
);

module.exports = router;