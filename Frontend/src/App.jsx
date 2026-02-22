import React, { useState, useEffect } from 'react'
import axios from "axios"

const App = () => {

  const [note, setNote] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const fetchNotes = () => {
    axios.get("http://localhost:3000/api/notes")
      .then((res) => setNote(res.data.notes))
      .catch(err => console.log(err))
  }

  const submitHandle = (e) => {
    e.preventDefault()
    console.log(formData)
    // axios.post("http://localhost:3000/api/notes", formData) // optional backend
    // fetchNotes() // update notes list
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <>
      <div className="form">
        <form onSubmit={submitHandle}>
          <input
            type="text"
            name='title'
            placeholder='Enter name'
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name='image'
            placeholder='Image URL'
            value={formData.image}
            onChange={handleChange}
          />
          <textarea
            name="description"
            id="details"
            placeholder='Enter Details'
            value={formData.description}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="notes">
        {note.map(n => (
          <div className="note" key={n._id}>
            <img src={n.image} alt="" />
            <h2>{n.title}</h2>
            <p>{n.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App