import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

const App = () => {
  const [note, setNote] = useState([])
  function fetchNotes(){
    axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
    console.log(res.data)
   setNote(res.data.notes)
  })
  }
  useEffect(()=>{
    fetchNotes()
  },[])

  return (
    <>
    <div className="form">
      <form>
        <input type="text" name='title' placeholder='Enter name' />
        <textarea name="description" id="details" placeholder='Enter Details'></textarea>
        <button>submit</button>

      </form>
    </div>
      <div className="notes">
     {
      note.map(note=>{
        return  <div className="note">
        <img src={note.image} alt="" />
        <h2>{note.title}</h2>
        <p>{note.description}</p>
        </div>
      })
     }
      </div>
    </>
  )
}

export default App
