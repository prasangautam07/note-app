import { useState,useEffect } from "react"
import { useNavigate,useParams } from "react-router"
import axios from "axios"
import './EditNotePage.css'
function EditNotePage({updateNote}) {
  const[title,setTitle]=useState('')
  const[body,setBody]=useState('')
  const [category,setCategory]=useState()
  const {slug}=useParams();
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get(`https://note-app-api-vwz4.onrender.com//notes/${slug}`)
    .then((res)=>{
      setTitle(res.data.title)
      setBody(res.data.body)
      setCategory(res.data.category)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[slug])

  const updateNoteObject={
    title:title,
    body:body,
    category:category
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    updateNote(updateNoteObject,slug);
    navigate(`/notes/${slug}`)

  }
  return (
    <div className="edit-note-container">
      <div className="edit-note">
      <form onSubmit={handleSubmit}>
        <h1>Edit Note</h1>
        <div className="mb-3 title-block">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 content-block">
          <label htmlFor="content">Content</label>
          <textarea
            name=""
            value={body}
            id=""
            required
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3 category-block">
          <label htmlFor="category">Note's Category</label>
          <select className="form-select" required
          value={category}
          onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Pick a category</option>
            <option value="BUSINESS">BUSINESS</option>
            <option value="PERSONAL">PERSONAL</option>
            <option value="IMPORTANT">IMPORTANT</option>
          </select>
        </div>
        <button className="Add-note-btn">Update Note</button>
      </form> 
      </div>
    </div>
  )
}

export default EditNotePage

