const express = require("express")

const app = express()
const noteModel = require("./models/note.model")
app.use(express.json())

// Post Method

app.post("/api/notes",async(req,res)=>{
    const {title,description,image} = req.body

   const note = await noteModel.create({
        title,description,image
    })
    res.status(201).json({
        message : 'note created successfully',
        note
    })
})

// Get Method 

app.get("/api/notes",async (req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message : "notes fetched successfully",
        notes
    })
})

// Delete Method 
app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const note = await noteModel.findById(id)
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message : "note delected successfully",
        note
    })
})

// Patch Method
app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {title,description,image} = req.body
    const note = await noteModel.findById(id) 
     await noteModel.findByIdAndUpdate(id,{title,description,image})

    res.status(200).json({
        message : "note updated successfully",
        note
    })
})
module.exports = app