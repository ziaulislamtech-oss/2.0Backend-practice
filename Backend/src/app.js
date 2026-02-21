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
//

module.exports = app