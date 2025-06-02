import express from "express";
import { getNotes, createNote, getNote, updateNote, deleteNote } from "../controllers/notesController.js";

const router = express.Router();

router.route("/").get(getNotes).post(getNotes);

router.route("/:noteId").get(getNote).put(updateNote);

router.route("/user/:noteId").get(getNote);

router.route("/user/:noteId").delete(deleteNote);

export default router;