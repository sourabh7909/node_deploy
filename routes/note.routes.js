const express = require('express')
const { NoteModel } = require('../model/note.model')
const { Auth } = require('../middleware/auth.middleware')

const noteRoutes = express.Router()

noteRoutes.use(Auth)
noteRoutes.post("/create", async (req, res) => {
  // console.log(req.body)
  try {
    const note = new NoteModel(req.body)
    await note.save()
    res.status(200).json({ msg: "new note has been created", note: req.body })
  } catch (error) {
    res.status(400).json({ msg: "something" })
  }
})
noteRoutes.get("/", async (req, res) => {
  try {
    const Allnotes = await NoteModel.find({ userID: req.body.userID })
    res.status(200).json({ msg: "All notes", notes: Allnotes })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

noteRoutes.get("/updates/:userID", async (req, res) => {
  console.log(req.params)
  try {
    const Allnotes = await NoteModel.find({ userID:req.params.userID })
    res.status(200).json({ msg: "All notes", notes: Allnotes })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

noteRoutes.patch("/update/:noteID", async (req, res) => {
  // userID in the user doc===userID in the note doc
  const UserIDinUserDoc = req.body.userID
  const { noteID } = req.params
  console.log(noteID)
  try {
    const note = await NoteModel.findOne({ _id: noteID })
    console.log(note)
    const UserIDinNoteDoc = note.userID
    console.log("useriddoc", UserIDinUserDoc, "note id", UserIDinNoteDoc)
    if (UserIDinUserDoc === UserIDinNoteDoc) {
      await NoteModel.findByIdAndUpdate({ _id: noteID }, req.body)
      res.json({ msg: `${note.title} has been updated` })
    } else {
      res.json({ msg: "Not Authorized!!" })
    }
  } catch (error) {
    res.json({ error: error })
  }
})

noteRoutes.delete("/delete/:noteID", async (req, res) => {
  const UserIDinUserDoc = req.body.userID
  const { noteID } = req.params

  try {
    const note = await NoteModel.findOne({ _id: noteID })
    const UserIDinNoteDoc = note.userID
    if (UserIDinUserDoc === UserIDinNoteDoc) {
      await NoteModel.findByIdAndDelete({ _id: noteID })
      res.json({ msg: `${note.title} has been Deleted` })
    } else {
      res.json({ msg: "Not Authorized!!" })
    }
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = { noteRoutes }