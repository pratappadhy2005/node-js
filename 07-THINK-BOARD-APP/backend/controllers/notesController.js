import asyncHandler from "express-async-handler";
import Note from "../models/Note.js";

//@desc Get all notes
//@route GET /api/notes
//@access private
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({});
    res.status(200).json(notes);
})

//@desc Create new note
//@route POST /api/notes
//@access private
const createNote = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.content) {
        res.status(400);
        throw new Error("Please add a title and content");
    }
    const note = await Note.create({
        user_id: req.user.id,
        title: req.body.title,
        content: req.body.content,
    });
    res.status(201).json(note);
})

//@desc Get note
//@route GET /api/notes/:id
//@access private
const getNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
        res.status(404);
        throw new Error("Note not found");
    }
    res.status(200).json(note);
})

//@desc Update note
//@route PUT /api/notes/:id
//@access private
const updateNote = asyncHandler(async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) {
        res.status(404);
        throw new Error("Note not found");
    }
    res.status(200).json(note);
})

//@desc Delete note
//@route DELETE /api/notes/:id
//@access private
const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
        res.status(404);
        throw new Error("Note not found");
    }
    res.status(200).json({ message: "Note deleted successfully" });
})

export {
    getNotes,
    createNote,
    getNote,
    updateNote,
    deleteNote,
};