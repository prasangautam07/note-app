import "./AddNotePage.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function AddNotePage({addNote}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
 
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  }

  const newNote =  {
    title: title,
    body: body,
    category: category
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted"); 
    if (!title && !body && !category) {
      return;
    }
    addNote(newNote);
    navigate("/");
    toast.success("Note Added successfully!");
    
  };
  return (
    <div className="add-note-container">
      <form onSubmit={handleSubmit}>
        <h1>Add New Notes</h1>
        <div className="mb-3 title-block">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={title}
            onChange={(e) => titleChangeHandler(e)}
          />
        </div>
        <div className="mb-3 content-block">
          <label htmlFor="content">Content</label>
          <textarea
            name=""
            value={body}
            id=""
            required
            onChange={(e) => bodyChangeHandler(e)}
          ></textarea>
        </div>
        <div className="mb-3 category-block">
          <label htmlFor="category">Note's Category</label>
          <select className="form-select" required
          value={category}
          onChange={(e)=>categoryChangeHandler(e)}>
            <option value="">Pick a category</option>
            <option value="BUSINESS">BUSINESS</option>
            <option value="PERSONAL">PERSONAL</option>
            <option value="IMPORTANT">IMPORTANT</option>
          </select>
        </div>
        <button className="Add-note-btn">Add Note</button>
      </form>
    </div>
  );
}

export default AddNotePage;
